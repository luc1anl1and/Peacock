using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace Peacock.Hosting
{
    public sealed class ServerHost : IDisposable
    {
        private readonly string directory;
        private readonly string executableOverride;
        private readonly SemaphoreSlim lifecycle = new SemaphoreSlim(1, 1);
        private Process process;
        private ProcessJob job;
        private bool stopping;
        private bool disposed;

        public int Port { get; private set; }
        public string Address { get { return "127.0.0.1" + (Port == 80 ? "" : ":" + Port); } }
        public string Url { get { return "http://" + Address + "/"; } }
        public bool IsRunning { get { try { return process != null && !process.HasExited; } catch (InvalidOperationException) { return false; } } }
        public event Action<string> Output;
        public event Action UnexpectedExit;

        public ServerHost(string applicationDirectory, int port)
            : this(applicationDirectory, port, null) { }

        // The lifecycle tests supply a deterministic child without replacing embedded bytes.
        internal ServerHost(string applicationDirectory, int port, string executableOverride)
        {
            if (port < 1 || port > 65535) throw new ArgumentOutOfRangeException("port");
            directory = Path.GetFullPath(applicationDirectory);
            this.executableOverride = executableOverride;
            Port = port;
        }

        public async Task StartAsync(CancellationToken cancellation)
        {
            await lifecycle.WaitAsync(cancellation);
            try
            {
                if (disposed) throw new ObjectDisposedException("ServerHost");
                if (IsRunning) return;
                Cleanup();
                if (executableOverride == null && !ApplicationPaths.HasAssets(directory))
                    throw new DirectoryNotFoundException("Server resources are missing from " + directory + ". Rebuild the complete application with build.ps1.");
                string executable = executableOverride;
                if (executable == null) executable = await Task.Run(EmbeddedServer.GetExecutablePath, cancellation);
                cancellation.ThrowIfCancellationRequested();
                if (!File.Exists(executable))
                    throw new FileNotFoundException("Compiled server is missing. Rebuild Peacock.");
                // Fail instead of silently attaching to an unrelated process using this port.
                var probe = new TcpListener(IPAddress.Loopback, Port);
                try { probe.Start(); }
                catch (SocketException) { throw new InvalidOperationException("Port " + Port + " is already in use. Choose another --port."); }
                finally { probe.Stop(); }

                stopping = false;
                var ready = new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously);
                var info = new ProcessStartInfo(executable)
                {
                    WorkingDirectory = directory,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                    RedirectStandardInput = true,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    StandardOutputEncoding = Encoding.UTF8,
                    StandardErrorEncoding = Encoding.UTF8
                };
                info.EnvironmentVariables["HOST"] = "127.0.0.1";
                info.EnvironmentVariables["PORT"] = Port.ToString();
                info.EnvironmentVariables["LOG_LEVEL_CONSOLE"] = "info";
                info.EnvironmentVariables["NO_COLOR"] = "1";
                process = new Process { StartInfo = info, EnableRaisingEvents = true };
                DataReceivedEventHandler receive = (sender, args) =>
                {
                    if (args.Data == null) return;
                    string line = Regex.Replace(args.Data, "\u001b\\[[0-9;]*m", "");
                    Emit(line);
                    if (line.Contains("Server started.")) ready.TrySetResult(true);
                    if (line.Contains("Critical error during bootstrap"))
                        ready.TrySetException(new InvalidOperationException("Server startup failed. See the preceding server log for the cause."));
                };
                process.OutputDataReceived += receive;
                process.ErrorDataReceived += receive;
                process.Exited += (sender, args) =>
                {
                    ready.TrySetException(new InvalidOperationException("Server exited before startup completed. See the server log."));
                    if (!stopping)
                    {
                        Emit("Server exited unexpectedly.");
                        var handler = UnexpectedExit;
                        if (handler != null) handler();
                    }
                };
                job = ProcessJob.Create();
                process.Start();
                job.Add(process);
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();
                Task timeout = Task.Delay(TimeSpan.FromSeconds(60), cancellation);
                if (await Task.WhenAny(ready.Task, timeout) != ready.Task)
                {
                    cancellation.ThrowIfCancellationRequested();
                    throw new TimeoutException("Server did not report readiness within 60 seconds. See logs in the application directory.");
                }
                await ready.Task;
                cancellation.ThrowIfCancellationRequested();
                using (var client = new TcpClient())
                {
                    Task connection = client.ConnectAsync(IPAddress.Loopback, Port);
                    if (await Task.WhenAny(connection, Task.Delay(3000, cancellation)) != connection)
                        throw new TimeoutException("Server reported startup but its HTTP port is not responding.");
                    await connection;
                }
                if (!IsRunning) throw new InvalidOperationException("Server stopped during startup.");
            }
            catch { stopping = true; Cleanup(); throw; }
            finally { lifecycle.Release(); }
        }

        public async Task StopAsync()
        {
            await lifecycle.WaitAsync();
            try
            {
                stopping = true;
                if (IsRunning)
                {
                    try { process.StandardInput.WriteLine("shutdown"); process.StandardInput.Flush(); }
                    catch (IOException) { }
                    catch (InvalidOperationException) { }
                    await Task.Run(() => process.WaitForExit(5000));
                }
                Cleanup();
            }
            finally { lifecycle.Release(); }
        }

        private void Emit(string message)
        {
            var handler = Output;
            if (handler != null) handler(message);
        }

        private void Cleanup()
        {
            if (job != null) { job.Dispose(); job = null; }
            if (process != null)
            {
                try { if (!process.HasExited) { process.Kill(); process.WaitForExit(3000); } }
                catch (InvalidOperationException) { }
                finally { process.Dispose(); process = null; }
            }
        }

        public void Dispose()
        {
            if (disposed) return;
            disposed = true;
            stopping = true;
            Cleanup();
        }
    }
}
