using System;
using System.Security.Principal;
using System.Windows.Forms;

namespace HitmanPatcher;

internal static class Program
{
	[STAThread]
	private static void Main(string[] args)
	{
		Compositions.HasAdmin = CheckForAdmin();
		Cli.EnsureConsole(args);
		Cli.CliOptions cliOptions = Cli.CliOptions.FromArguments(args);
		if (cliOptions.Headless)
		{
			Console.WriteLine(CliLocale.HeadlessBanner);
			MemoryPatcher.PatchAllProcesses(new Cli.ConsoleLogger(), new MemoryPatcher.Options
			{
				AlwaysSendAuthHeader = true,
				CustomConfigDomain = cliOptions.Domain,
				DisableCertPinning = true,
				DisableForceOfflineOnFailedDynamicResources = cliOptions.OptionalDynRes,
				EnableDynamicResources = true,
				SetCustomConfigDomain = true,
				UseHttp = cliOptions.UseHttp
			});
		}
		else
		{
			Application.EnableVisualStyles();
			Application.SetCompatibleTextRenderingDefault(defaultValue: false);
			Application.Run(MainForm.GetInstance());
		}
	}

	private static bool CheckForAdmin()
	{
		return new WindowsPrincipal(WindowsIdentity.GetCurrent()).IsInRole(WindowsBuiltInRole.Administrator);
	}
}
