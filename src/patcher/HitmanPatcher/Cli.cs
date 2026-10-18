using System;
using System.Linq;
using System.Runtime.InteropServices;

namespace HitmanPatcher;

internal static class Cli
{
	internal class CliOptions
	{
		internal bool Headless { get; set; }

		internal string Domain { get; set; }

		internal bool UseHttp { get; set; }

		internal bool OptionalDynRes { get; set; }

		internal static CliOptions FromArguments(string[] args)
		{
			CliOptions cliOptions = new CliOptions
			{
				Domain = "127.0.0.1",
				Headless = false,
				OptionalDynRes = true,
				UseHttp = true
			};
			int num = 0;
			Action<int, string> action = (int index, string argName) =>
			{
				if (args.Length <= index)
				{
					throw new ArgumentException("Expected next value for argument " + argName + " but didn't find one!");
				}
			};
			string[] array = args;
			foreach (string text in array)
			{
				switch (text)
				{
				case "--headless":
					cliOptions.Headless = true;
					break;
				case "--optional-dynamic-resources":
					cliOptions.OptionalDynRes = true;
					break;
				case "--domain":
					action(num, text);
					cliOptions.Domain = args[num + 1];
					break;
				case "--use-http":
					cliOptions.UseHttp = true;
					break;
				case "--help":
					Console.WriteLine(CliLocale.HelpHeader);
					Console.WriteLine("");
					Console.WriteLine("Options:");
					Console.WriteLine("  --headless : " + CliLocale.HeadlessDescription);
					Console.WriteLine("  --optional-dynamic-resources : " + CliLocale.OptionalDynResDescription);
					Console.WriteLine("  --domain <url> : " + CliLocale.DomainDescription);
					Console.WriteLine("  --use-http : " + CliLocale.UseHttpDescription);
					Environment.Exit(0);
					break;
				}
				num++;
			}
			return cliOptions;
		}
	}

	internal class ConsoleLogger : ILoggingProvider
	{
		public void log(string msg)
		{
			Console.WriteLine(msg);
		}
	}

	private const int ATTACH_PARENT_PROCESS = -1;

	[DllImport("kernel32.dll", SetLastError = true)]
	[return: MarshalAs(UnmanagedType.Bool)]
	private static extern bool AttachConsole(int dwProcessId);

	internal static void EnsureConsole(string[] args)
	{
		if (args.Any((string arg) => arg.Contains("-")))
		{
			AttachConsole(-1);
		}
	}
}
