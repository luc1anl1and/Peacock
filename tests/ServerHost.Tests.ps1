param([switch]$Integration)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$executable = Join-Path $root 'dist/Peacock/Peacock.exe'
if (!(Test-Path -LiteralPath $executable)) { throw 'Run build.ps1 before testing.' }
[Reflection.Assembly]::LoadFrom($executable) | Out-Null
$artifactRoot = [IO.Path]::GetFullPath((Join-Path $root 'artifacts/tests'))
$work = [IO.Path]::GetFullPath((Join-Path $artifactRoot ([Guid]::NewGuid().ToString('N'))))
if (!$work.StartsWith($artifactRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Invalid test directory.' }
New-Item -ItemType Directory -Force -Path (Join-Path $work 'nodedist') | Out-Null
$previousMode = $env:PEACOCK_HOST_TEST_MODE

function Get-FreePort {
    $listener = New-Object Net.Sockets.TcpListener([Net.IPAddress]::Loopback, 0)
    try { $listener.Start(); return $listener.LocalEndpoint.Port } finally { $listener.Stop() }
}
function New-TestServer([string]$Directory, [int]$Port) {
    $constructor = [Peacock.Hosting.ServerHost].GetConstructor([Reflection.BindingFlags]'Instance,NonPublic', $null, [type[]]@([string],[int],[string]), $null)
    $childExecutable = Join-Path $work 'nodedist/node.exe'
    $arguments = New-Object object[] 3
    $arguments[0] = $Directory.PSObject.BaseObject
    $arguments[1] = $Port.PSObject.BaseObject
    $arguments[2] = $childExecutable.PSObject.BaseObject
    return $constructor.Invoke($arguments)
}
function Assert-True($Value, [string]$Message) { if (!$Value) { throw $Message } }
function Expect-StartFailure($Server, $Token) {
    $failed = $false
    try { $null = $Server.StartAsync($Token).GetAwaiter().GetResult() } catch { $failed = $true }
    Assert-True $failed 'Expected startup failure.'
    Assert-True (!$Server.IsRunning) 'Failed startup left a child process running.'
}

try {
    # A small deterministic child exercises lifecycle handling without game patching.
    Add-Type -OutputAssembly (Join-Path $work 'nodedist/node.exe') -OutputType ConsoleApplication -TypeDefinition @'
using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Threading;
public static class FakeServer {
    public static void Main() {
        File.WriteAllText("pid.txt", Process.GetCurrentProcess().Id.ToString());
        string mode = Environment.GetEnvironmentVariable("PEACOCK_HOST_TEST_MODE");
        if (mode == "fail") { Console.Error.WriteLine("Expected test failure"); return; }
        if (mode == "bootstrap-fail") { Console.Error.WriteLine("Critical error during bootstrap!"); Thread.Sleep(30000); return; }
        if (mode == "delay") Thread.Sleep(30000);
        var listener = new TcpListener(IPAddress.Loopback, int.Parse(Environment.GetEnvironmentVariable("PORT")));
        listener.Start();
        Console.WriteLine("Server started.");
        if (mode == "crash") { Thread.Sleep(500); return; }
        if (Console.ReadLine() == "shutdown") File.WriteAllText("stopped.txt", "graceful");
        listener.Stop();
    }
}
'@
    $env:PEACOCK_HOST_TEST_MODE = ''
    $server = New-TestServer $work (Get-FreePort)
    try {
        $null = $server.StartAsync([Threading.CancellationToken]::None).GetAwaiter().GetResult()
        Assert-True $server.IsRunning 'Server did not start.'
        $null = $server.StopAsync().GetAwaiter().GetResult()
        Assert-True (!$server.IsRunning) 'Stop left server running.'
        Assert-True (Test-Path (Join-Path $work 'stopped.txt')) 'Shutdown did not use the graceful stdin channel.'
        $null = $server.StartAsync([Threading.CancellationToken]::None).GetAwaiter().GetResult()
        $childId = [int](Get-Content (Join-Path $work 'pid.txt'))
        $server.Dispose()
        Start-Sleep -Milliseconds 100
        Assert-True (!(Get-Process -Id $childId -ErrorAction SilentlyContinue)) 'Disposal left an orphan child process.'
    } finally { $server.Dispose() }

    $occupied = New-Object Net.Sockets.TcpListener([Net.IPAddress]::Loopback, 0)
    $occupied.Start()
    $server = New-TestServer $work $occupied.LocalEndpoint.Port
    try { Expect-StartFailure $server ([Threading.CancellationToken]::None) }
    finally { $server.Dispose(); $occupied.Stop() }

    $env:PEACOCK_HOST_TEST_MODE = 'fail'
    $server = New-TestServer $work (Get-FreePort)
    try { Expect-StartFailure $server ([Threading.CancellationToken]::None) } finally { $server.Dispose() }

    $env:PEACOCK_HOST_TEST_MODE = 'delay'
    $cancellation = New-Object Threading.CancellationTokenSource
    $cancellation.CancelAfter(200)
    $server = New-TestServer $work (Get-FreePort)
    try { Expect-StartFailure $server $cancellation.Token }
    finally { $server.Dispose(); $cancellation.Dispose() }

    $env:PEACOCK_HOST_TEST_MODE = 'bootstrap-fail'
    $server = New-TestServer $work (Get-FreePort)
    $elapsed = [Diagnostics.Stopwatch]::StartNew()
    try {
        Expect-StartFailure $server ([Threading.CancellationToken]::None)
        Assert-True ($elapsed.Elapsed.TotalSeconds -lt 5) 'Fatal bootstrap error waited for the startup timeout.'
    } finally { $server.Dispose() }

    $env:PEACOCK_HOST_TEST_MODE = 'crash'
    $server = New-TestServer $work (Get-FreePort)
    try {
        $null = $server.StartAsync([Threading.CancellationToken]::None).GetAwaiter().GetResult()
        Start-Sleep -Milliseconds 800
        Assert-True (!$server.IsRunning) 'Unexpected process exit was not detected.'
        $null = $server.StopAsync().GetAwaiter().GetResult()
    } finally { $server.Dispose() }
    Write-Host 'PASS: startup, graceful stop, restart, orphan cleanup, occupied port, early exit, cancellation, and unexpected exit.'

    if ($Integration) {
        $bin = Join-Path $root 'src/Peacock/bin/Release/net46'
        $expected = [IO.Path]::GetFullPath((Join-Path $root 'dist/Peacock'))
        Assert-True ([Peacock.Hosting.ApplicationPaths]::Resolve($bin) -eq $expected) 'IDE/bin launch did not select packaged assets.'
        Assert-True ([Peacock.Hosting.ApplicationPaths]::Resolve($expected) -eq $expected) 'Deployed launch changed its application directory.'
        $invalid = Join-Path $work 'incomplete-installation'
        New-Item -ItemType Directory -Path $invalid | Out-Null
        $rejected = $false
        try { $null = [Peacock.Hosting.ApplicationPaths]::Resolve($invalid) } catch { $rejected = $true }
        Assert-True $rejected 'Incomplete deployment was not rejected.'
        $application = Join-Path $work 'application'
        New-Item -ItemType Directory -Force -Path (Join-Path $application 'images') | Out-Null
        foreach ($item in @('resources', 'webui', 'options.ini')) {
            Copy-Item -LiteralPath (Join-Path $root "dist/Peacock/$item") -Destination $application -Recurse
        }
        $cachedServer = [Peacock.Hosting.EmbeddedServer]::GetExecutablePath()
        $payload = Join-Path $root 'src/Peacock/Server/Embedded/Peacock.Server.bytes'
        Assert-True ((Get-FileHash $cachedServer).Hash -eq (Get-FileHash $payload).Hash) 'Extracted executable does not match embedded server bytes.'
        Assert-True (!(Test-Path (Join-Path $application 'chunk0.js'))) 'Integration fixture must not contain loose server JavaScript.'
        Assert-True (!(Test-Path (Join-Path $application 'nodedist'))) 'Integration fixture must not contain a separate Node runtime.'
        $server = New-Object Peacock.Hosting.ServerHost($application, (Get-FreePort))
        try {
            $null = $server.StartAsync([Threading.CancellationToken]::None).GetAwaiter().GetResult()
            $response = Invoke-WebRequest -UseBasicParsing -Uri $server.Url -TimeoutSec 10
            Assert-True ($response.StatusCode -eq 200) 'Real server did not serve HTTP successfully.'
            Assert-True ($response.Content.Contains('/assets/app.js')) 'Web interface asset references are incorrect.'
            $null = $server.StopAsync().GetAwaiter().GetResult()
            Assert-True (!$server.IsRunning) 'Real server did not stop.'
            Write-Host 'PASS: embedded executable bytes match the extracted server; compiled server starts, serves HTTP, and stops without loose JavaScript or Node.js.'
        } finally { $server.Dispose() }
    }
} finally {
    $env:PEACOCK_HOST_TEST_MODE = $previousMode
    # The resolved GUID directory was checked against artifacts/tests before creation.
    if ($work.StartsWith($artifactRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
        Remove-Item -LiteralPath $work -Recurse -Force
    }
}
