param([ValidateRange(1, 65535)][int]$Port = 80)
$ErrorActionPreference = 'Stop'
$application = Join-Path $PSScriptRoot 'dist/Peacock'
if (!(Test-Path -LiteralPath (Join-Path $application 'Peacock.exe'))) {
    throw 'Application has not been built. Run .\build.ps1 first.'
}
Start-Process -FilePath (Join-Path $application 'Peacock.exe') -WorkingDirectory $application -ArgumentList '--port', "$Port" -Wait
