using System;
using System.IO;
using System.Security.Cryptography;
using System.Threading;

namespace Peacock.Hosting
{
    public static class EmbeddedServer
    {
        private static readonly Lazy<string> executable = new Lazy<string>(Extract);

        public static string GetExecutablePath() { return executable.Value; }

        private static Stream OpenResource()
        {
            Stream stream = typeof(EmbeddedServer).Assembly.GetManifestResourceStream("Peacock.Server.bytes");
            if (stream == null) throw new InvalidOperationException("The compiled server is not embedded. Rebuild Peacock.");
            return stream;
        }

        private static string Digest(Stream stream)
        {
            using (var sha = SHA256.Create())
                return BitConverter.ToString(sha.ComputeHash(stream)).Replace("-", "").ToLowerInvariant();
        }

        private static bool Matches(string file, string expected)
        {
            if (!File.Exists(file)) return false;
            using (var stream = File.OpenRead(file)) return Digest(stream) == expected;
        }

        private static string Extract()
        {
            string digest;
            using (var resource = OpenResource()) digest = Digest(resource);
            string directory = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Peacock", "ServerCache", digest);
            string target = Path.Combine(directory, "Peacock.Server.exe");
            using (var mutex = new Mutex(false, "Local\\PeacockServerExtract-" + digest))
            {
                bool acquired = false;
                try
                {
                    try { acquired = mutex.WaitOne(TimeSpan.FromSeconds(60)); }
                    catch (AbandonedMutexException) { acquired = true; }
                    if (!acquired) throw new TimeoutException("Another Peacock instance is still extracting the compiled server.");
                    Directory.CreateDirectory(directory);
                    if (Matches(target, digest)) return target;
                    string temporary = Path.Combine(directory, Guid.NewGuid().ToString("N") + ".tmp");
                    try
                    {
                        using (var resource = OpenResource())
                        using (var output = new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None))
                            resource.CopyTo(output);
                        if (!Matches(temporary, digest)) throw new IOException("Embedded server extraction failed verification.");
                        if (File.Exists(target)) File.Delete(target);
                        File.Move(temporary, target);
                    }
                    finally { if (File.Exists(temporary)) File.Delete(temporary); }
                    return target;
                }
                finally { if (acquired) mutex.ReleaseMutex(); }
            }
        }
    }
}
