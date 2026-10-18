param([ValidateRange(1, 65535)][int]$Port = 80, [string]$HostAddress = '127.0.0.1')
$ErrorActionPreference = 'Stop'
$application = Join-Path $PSScriptRoot 'dist/Peacock'
if (!(Test-Path -LiteralPath (Join-Path $application 'chunk0.js'))) {
    throw 'Application has not been built. Run .\build.ps1 first.'
}
$previousHost = $env:HOST
$previousPort = $env:PORT
Push-Location $application
try {
    $env:HOST = $HostAddress
    $env:PORT = "$Port"
    & .\nodedist\node.exe chunk0.js
    if ($LASTEXITCODE) { throw "Server exited with code $LASTEXITCODE." }
} finally {
    $env:HOST = $previousHost
    $env:PORT = $previousPort
    Pop-Location
}
