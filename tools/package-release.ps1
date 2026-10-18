param([ValidatePattern('^[A-Za-z0-9][A-Za-z0-9._-]*$')][string]$Name = 'Peacock-windows-x64', [switch]$SkipBuild)
$ErrorActionPreference = 'Stop'
$workspace = [IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$dist = Join-Path $workspace 'dist'
$application = Join-Path $dist 'Peacock'
$release = [IO.Path]::GetFullPath((Join-Path $dist $Name))
$archive = Join-Path $dist ($Name + '.zip')
if (!$release.StartsWith($dist + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase) -or $release -eq $application) {
    throw 'Choose a release name distinct from the working application.'
}
if ((Test-Path -LiteralPath $release) -or (Test-Path -LiteralPath $archive)) {
    throw 'This release name already exists. Use -Name with a new release name to preserve existing files.'
}
if (!$SkipBuild) { & (Join-Path $workspace 'build.ps1') }
if (!(Test-Path -LiteralPath (Join-Path $application 'Peacock.exe'))) { throw 'Build the application first.' }

New-Item -ItemType Directory -Path $release | Out-Null
Copy-Item -LiteralPath (Join-Path $application 'Peacock.exe') -Destination $release
# Release defaults come from source configuration, never local player settings.
Copy-Item -LiteralPath (Join-Path $workspace 'config/options.ini') -Destination $release
foreach ($directory in @('images', 'resources', 'licenses')) {
    Copy-Item -LiteralPath (Join-Path $application $directory) -Destination $release -Recurse
}

# Use the current web assets rather than any older bundles left in a working install.
$web = Join-Path $release 'webui/dist'
New-Item -ItemType Directory -Force -Path $web | Out-Null
Copy-Item -LiteralPath (Join-Path $workspace 'src/Peacock/WebUI/index.html') -Destination $web
Copy-Item -LiteralPath (Join-Path $workspace 'src/Peacock/WebUI/THIRDPARTYNOTICES.txt') -Destination $web
Copy-Item -LiteralPath (Join-Path $workspace 'src/Peacock/WebUI/assets') -Destination $web -Recurse

@'
# Peacock for Windows x64

Extract this entire folder, then double-click Peacock.exe. Keep the resources,
images, webui, and licenses folders beside the executable. Windows x64 and a
compatible .NET Framework 4.6-or-later installation are required. You do not need
Node.js, npm, the .NET SDK, or the source project to run this application.

Wait for "Local server: running", then launch a supported HITMAN game. The local
server address is selected automatically. Use "Open web interface" for profile
and progression tools. Close the game before exiting Peacock.

To use another port, open a terminal in this folder and run:

    .\Peacock.exe --port 8080

Other options:

    .\Peacock.exe --headless
    .\Peacock.exe --server-only
    .\Peacock.exe --tools
    .\Peacock.exe --help

Headless mode runs the server and game patching without a window. Server-only
mode does not patch game processes. Ctrl+C stops either console mode.

Edit options.ini to change server settings, then restart the server. Local
progress is created in userdata. Back up that folder before upgrading and copy
it into a new installation while the application is stopped.

The embedded server is extracted automatically to
%LOCALAPPDATA%\Peacock\ServerCache. Its runtime is included in Peacock.exe.

This is a modified, unofficial distribution of The Peacock Project. Retain the
license notices under licenses and webui/dist/THIRDPARTYNOTICES.txt. The original
project identifies its code as AGPL-3.0-or-later.

Project source: https://github.com/luc1anl1and/Peacock
'@ | Set-Content -LiteralPath (Join-Path $release 'README.md') -Encoding UTF8

Add-Type -AssemblyName System.IO.Compression.FileSystem
[IO.Compression.ZipFile]::CreateFromDirectory($release, $archive, [IO.Compression.CompressionLevel]::Optimal, $true)
$digest = (Get-FileHash -LiteralPath $archive -Algorithm SHA256).Hash.ToLowerInvariant()
Set-Content -LiteralPath ($archive + '.sha256') -Value ($digest + '  ' + [IO.Path]::GetFileName($archive)) -Encoding ASCII
Write-Host "Release folder: $release"
Write-Host "Upload to GitHub Releases: $archive"
Write-Host "Checksum: $archive.sha256"
