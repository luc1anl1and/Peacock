$ErrorActionPreference = 'Stop'
Push-Location (Split-Path -Parent $PSScriptRoot)
try {
    & npm.cmd ci --prefix tools
    if ($LASTEXITCODE) { throw 'npm ci failed' }
    if (!(Test-Path tools/dotnet/ilspycmd.exe)) {
        & dotnet tool install ilspycmd --version 11.1.0.9782 --tool-path tools/dotnet
        if ($LASTEXITCODE) { throw 'ILSpy installation failed' }
    }
    & tools/dotnet/ilspycmd.exe -p -o src/patcher vendor/original/PeacockPatcher.exe
    if ($LASTEXITCODE) { throw 'C# decompilation failed' }
    foreach ($script in @('format.cjs', 'unpack-resources.cjs', 'index-and-verify.cjs')) {
        & node (Join-Path tools $script)
        if ($LASTEXITCODE) { throw "$script failed" }
    }
    & python tools/inventory.py
    if ($LASTEXITCODE) { throw 'Inventory failed' }
    & dotnet build src/patcher/PeacockPatcher.csproj --nologo
    if ($LASTEXITCODE) { throw 'Patcher build failed' }
} finally { Pop-Location }
