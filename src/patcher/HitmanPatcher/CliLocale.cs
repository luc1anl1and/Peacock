using System.CodeDom.Compiler;
using System.ComponentModel;
using System.Diagnostics;
using System.Globalization;
using System.Resources;
using System.Runtime.CompilerServices;

namespace HitmanPatcher;

[GeneratedCode("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
[DebuggerNonUserCode]
[CompilerGenerated]
internal class CliLocale
{
	private static ResourceManager resourceMan;

	private static CultureInfo resourceCulture;

	[EditorBrowsable(EditorBrowsableState.Advanced)]
	internal static ResourceManager ResourceManager
	{
		get
		{
			if (object.Equals(null, resourceMan))
			{
				resourceMan = new ResourceManager("HitmanPatcher.CliLocale", typeof(CliLocale).Assembly);
			}
			return resourceMan;
		}
	}

	[EditorBrowsable(EditorBrowsableState.Advanced)]
	internal static CultureInfo Culture
	{
		get
		{
			return resourceCulture;
		}
		set
		{
			resourceCulture = value;
		}
	}

	internal static string HeadlessDescription => ResourceManager.GetString("HeadlessDescription", resourceCulture);

	internal static string DomainDescription => ResourceManager.GetString("DomainDescription", resourceCulture);

	internal static string UseHttpDescription => ResourceManager.GetString("UseHttpDescription", resourceCulture);

	internal static string OptionalDynResDescription => ResourceManager.GetString("OptionalDynResDescription", resourceCulture);

	internal static string HeadlessBanner => ResourceManager.GetString("HeadlessBanner", resourceCulture);

	internal static string HelpHeader => ResourceManager.GetString("HelpHeader", resourceCulture);

	internal CliLocale()
	{
	}
}
