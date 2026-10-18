using System;
using System.IO;

namespace Peacock.Hosting
{
    public static class ApplicationPaths
    {
        public static bool HasAssets(string directory)
        {
            return File.Exists(Path.Combine(directory, "resources", "contracts.prp"))
                && Directory.Exists(Path.Combine(directory, "resources", "challenges"))
                && Directory.Exists(Path.Combine(directory, "resources", "mastery"))
                && File.Exists(Path.Combine(directory, "webui", "dist", "index.html"));
        }

        public static string Resolve(string executableDirectory)
        {
            string directory = Path.GetFullPath(executableDirectory);
            if (HasAssets(directory)) return directory;

            // IDE/bin launches use the packaged application's assets and saved data.
            for (var ancestor = new DirectoryInfo(directory); ancestor != null; ancestor = ancestor.Parent)
            {
                string project = Path.Combine(ancestor.FullName, "src", "Peacock");
                string bin = Path.Combine(project, "bin") + Path.DirectorySeparatorChar;
                if (!directory.StartsWith(bin, StringComparison.OrdinalIgnoreCase)
                    || !File.Exists(Path.Combine(project, "Peacock.csproj"))) continue;
                string packaged = Path.Combine(ancestor.FullName, "dist", "Peacock");
                if (HasAssets(packaged)) return packaged;
            }

            throw new DirectoryNotFoundException("Application resources are missing from " + directory
                + ". Run build.ps1 (without SkipPackaging) and keep the resources and webui folders with dist/Peacock/Peacock.exe.");
        }
    }
}
