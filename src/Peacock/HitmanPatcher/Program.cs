using System;
using System.Diagnostics;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Peacock.Hosting;

namespace HitmanPatcher;

internal static class Program
{
    [STAThread]
    private static int Main(string[] args)
    {
        Cli.EnsureConsole(args);
        try
        {
            LauncherOptions options = LauncherOptions.Parse(args);
            if (options.Help)
            {
                Console.WriteLine("Peacock: local server and game patcher");
                Console.WriteLine("  --port <1-65535>  Local HTTP port (default 80)");
                Console.WriteLine("  --headless        Run server and patcher without a window; Ctrl+C exits");
                Console.WriteLine("  --server-only     Run server without patching game processes; Ctrl+C exits");
                Console.WriteLine("  --tools           Open the embedded server's interactive utilities");
                return 0;
            }
            if (options.Tools) return RunTools();
            Compositions.HasAdmin = new WindowsPrincipal(WindowsIdentity.GetCurrent()).IsInRole(WindowsBuiltInRole.Administrator);
            string applicationDirectory = ApplicationPaths.Resolve(AppDomain.CurrentDomain.BaseDirectory);
            using (var host = new ServerHost(applicationDirectory, options.Port))
            {
                if (options.Headless) return RunHeadless(host, options.ServerOnly).GetAwaiter().GetResult();
                Application.EnableVisualStyles();
                Application.SetCompatibleTextRenderingDefault(false);
                var form = MainForm.GetInstance();
                form.log("Application data: " + applicationDirectory);
                using (var controls = new ServerControls(form, host)) Application.Run(form);
            }
            return 0;
        }
        catch (Exception error)
        {
            if (Array.IndexOf(args, "--headless") >= 0 || Array.IndexOf(args, "--server-only") >= 0 || Array.IndexOf(args, "--help") >= 0 || Array.IndexOf(args, "--tools") >= 0)
                Console.Error.WriteLine(error.Message);
            else MessageBox.Show(error.Message, "Peacock", MessageBoxButtons.OK, MessageBoxIcon.Error);
            return 1;
        }
    }

    private static int RunTools()
    {
        var info = new ProcessStartInfo(EmbeddedServer.GetExecutablePath(), "tools")
        {
            WorkingDirectory = ApplicationPaths.Resolve(AppDomain.CurrentDomain.BaseDirectory),
            UseShellExecute = false
        };
        using (var job = ProcessJob.Create())
        using (var process = Process.Start(info))
        {
            job.Add(process);
            process.WaitForExit();
            return process.ExitCode;
        }
    }

    private static async Task<int> RunHeadless(ServerHost host, bool serverOnly)
    {
        using (var cancellation = new CancellationTokenSource())
        {
            ConsoleCancelEventHandler cancel = (sender, args) => { args.Cancel = true; cancellation.Cancel(); };
            Console.CancelKeyPress += cancel;
            host.Output += Console.WriteLine;
            bool failed = false;
            host.UnexpectedExit += () => { failed = true; cancellation.Cancel(); };
            try
            {
                await host.StartAsync(cancellation.Token);
                var logger = new Cli.ConsoleLogger();
                var patchOptions = new MemoryPatcher.Options
                {
                    AlwaysSendAuthHeader = true,
                    CustomConfigDomain = host.Address,
                    DisableCertPinning = true,
                    DisableForceOfflineOnFailedDynamicResources = true,
                    EnableDynamicResources = true,
                    SetCustomConfigDomain = true,
                    UseHttp = true
                };
                while (!cancellation.IsCancellationRequested)
                {
                    if (!serverOnly) MemoryPatcher.PatchAllProcesses(logger, patchOptions);
                    await Task.Delay(1000, cancellation.Token);
                }
            }
            catch (OperationCanceledException) { }
            finally
            {
                Console.CancelKeyPress -= cancel;
                await host.StopAsync();
            }
            return failed ? 1 : 0;
        }
    }
}
