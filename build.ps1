param([ValidateSet('Debug', 'Release')][string]$Configuration = 'Release')
$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    & dotnet build src/patcher/PeacockPatcher.csproj -c $Configuration --nologo
    if ($LASTEXITCODE) { throw 'Patcher compilation failed.' }
    & "$PSScriptRoot/tools/build-runtime.ps1" -Configuration $Configuration
} finally { Pop-Location }
