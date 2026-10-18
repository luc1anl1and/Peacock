param([ValidateSet('Debug', 'Release')][string]$Configuration = 'Release')
$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    & dotnet build src/Peacock/Peacock.csproj -c $Configuration --nologo
    if ($LASTEXITCODE) { throw 'Peacock build failed.' }
} finally { Pop-Location }
