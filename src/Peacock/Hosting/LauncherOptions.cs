using System;

namespace Peacock.Hosting
{
    internal sealed class LauncherOptions
    {
        public int Port = 80;
        public bool Headless;
        public bool ServerOnly;
        public bool Help;
        public bool Tools;

        public static LauncherOptions Parse(string[] args)
        {
            var options = new LauncherOptions();
            for (int i = 0; i < args.Length; i++)
            {
                switch (args[i])
                {
                    case "--headless": options.Headless = true; break;
                    case "--server-only": options.ServerOnly = options.Headless = true; break;
                    case "--help": case "-h": options.Help = true; break;
                    case "--tools": options.Tools = true; break;
                    case "--port":
                        if (++i >= args.Length || !int.TryParse(args[i], out options.Port) || options.Port < 1 || options.Port > 65535)
                            throw new ArgumentException("--port requires a number between 1 and 65535.");
                        break;
                    default: throw new ArgumentException("Unknown option: " + args[i]);
                }
            }
            if (options.Tools && options.Headless) throw new ArgumentException("--tools cannot be combined with --headless or --server-only.");
            return options;
        }
    }
}
