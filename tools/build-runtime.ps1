param([ValidateSet('Debug', 'Release')][string]$Configuration = 'Release')
$ErrorActionPreference = 'Stop'
$workspace = Split-Path -Parent $PSScriptRoot
Push-Location $workspace
try {
    if (!(Test-Path tools/node_modules/msgpackr)) {
        & npm.cmd ci --prefix tools
        if ($LASTEXITCODE) { throw 'Helper dependency installation failed.' }
    }
    & node tools/assemble.cjs $Configuration
    if ($LASTEXITCODE) { throw 'Runtime assembly failed.' }
} finally { Pop-Location }
