# Peacock - Server and Patcher

Peacock provides a local server replacement for the HITMAN World of Assassination games. This repository builds one C# Windows application, `Peacock.exe`, containing the patcher interface and a server manager. Opening it starts the local server, shows server output alongside patcher logs, and enables game patching once the server is ready.

The server handles profiles, progression, challenges, mastery, contracts, loadouts, and game menus. The included browser interface manages local profiles and progress.

**The server is compiled first, then embedded as executable bytes in the C# application.** The byte payload contains the current JavaScript server and the Node.js runtime in a Windows single-executable application (SEA) with V8 code cache. The server has not been rewritten in C#. Images, web assets, configuration, and game data still live beside the main application.

This is recovered code from a modified, unofficial distribution. The original server identifies itself as 8.7.0 and the original patcher assembly as 9.0.1.0.

## Project layout

```text
src/Peacock/
  Peacock.csproj        Single C# application project
  HitmanPatcher/        Patcher interface and process patching
  Hosting/              C# server lifecycle, controls, and launcher options
  Server/index.js       Server bundle
  Server/bootstrap.cjs  Shutdown channel compiled into the server
  Server/Embedded/      Compiled server bytes and build fingerprint
  WebUI/                Browser HTML, JavaScript, CSS, and notices
data/                   Editable contracts, challenges, and mastery JSON
config/options.ini      Defaults for new installations
vendor/original/        Preserved original release and binary assets
tools/                  Packaging and recovery utilities
tests/                  Server lifecycle and integration checks
docs/                   Recovery reports and source indexes
dist/Peacock/           Built application (ignored by Git)
Peacock.slnx            Solution containing the single project
build.ps1               Build the application and package its files
run.ps1                 Open the combined application
```

## Requirements

Use Windows x64 with the .NET 10 SDK and Node.js/npm on PATH for building. The project uses C# 14 and targets .NET Framework 4.6. Running the application requires a compatible .NET Framework installation; it uses its bundled Node.js runtime and does not need a separate Node.js installation. Python 3 is needed only for recovery utilities.

The original distribution under `vendor/original/` supplies images, the Node.js runtime, and binary RPKG resources. Keep those files available when building.

## Compile

From the repository root in PowerShell:

```powershell
.\build.ps1
```

Or build the single project through the solution:

```powershell
dotnet build Peacock.slnx -c Release
```

Both commands install missing build dependencies, compile the current server, embed its bytes into C#, compile the C# application, encode JSON resources, and assemble `dist/Peacock/`. MSBuild enforces this order automatically. Unchanged server inputs reuse the verified compiled payload. The runnable entry point is:

```text
dist/Peacock/Peacock.exe
```

For Debug, use `.\build.ps1 -Configuration Debug`. An IDE can open `Peacock.slnx` or `src/Peacock/Peacock.csproj`. For compilation without packaging, pass `-p:SkipPackaging=true`; an executable launched from `bin/` uses the existing `dist/Peacock/` assets. If those assets have not been packaged, it reports the missing installation immediately.

Stop the application before rebuilding. Builds preserve existing `options.ini`, `userdata/`, and saved sessions. The old separate patcher, loose server scripts, and standalone Node runtime are removed from the generated application folder.

## Compiled server bytes

The build first produces `artifacts/server/Peacock.Server.exe`, then copies that executable byte-for-byte to `src/Peacock/Server/Embedded/Peacock.Server.bytes`. `Peacock.csproj` embeds this binary resource as `Peacock.Server.bytes` inside `Peacock.exe`. `server-build.json` records input and output SHA-256 hashes, runtime version, platform, and payload size.

To compile only the server:

```powershell
npm run setup
npm run build:server
```

On first launch, C# extracts the embedded executable to `%LOCALAPPDATA%/Peacock/ServerCache/<sha256>/Peacock.Server.exe`, verifies its hash, and starts it with the installation directory as its working directory. Other launches reuse the cache. The installation needs neither `chunk0.js` nor `nodedist/node.exe`. IDE and `bin/` launches automatically use `dist/Peacock/` for assets and saved data; deployed copies use their own application directory. The cache is regenerated from the embedded resource if absent when the application starts.

The compiler uses the original Windows x64 Node.js 22.18.0 runtime for both code-cache generation and executable creation, following [Node.js SEA documentation](https://nodejs.org/download/release/v22.18.0/docs/api/single-executable-applications.html). Keep the editable source in `Server/index.js`; rebuilding automatically regenerates bytes when compiler inputs change.

## GitHub Release package

Create a clean download containing only the executable, required assets, default settings, license notices, and a short user README:

```powershell
powershell -NoProfile -File tools/package-release.ps1
```

Upload `dist/Peacock-windows-x64.zip` and its `.sha256` checksum to a GitHub Release. The unpacked release is also available in `dist/Peacock-windows-x64/`. Source, dependencies, logs, caches, and player data are excluded. Use `-SkipBuild` to package an existing build, or `-Name Peacock-custom-windows-x64` to create another release without replacing an existing package.

## Use

1. Double-click `dist/Peacock/Peacock.exe`, or run `.\run.ps1` from the repository root.
2. Wait for **Local server: running**. The application selects the local server address and enables automatic patching once startup completes.
3. Launch a supported HITMAN game. Check the patcher log to confirm that its process was detected and patched.
4. Use **Open web interface** for local profile and progression tools.
5. Close the game, then exit Peacock. The application asks the server to run its shutdown handlers and stops the managed process. **Stop server** pauses the server and automatic patching; **Start server** starts them again.

Server output appears in the application log, and the server also maintains its normal log files in the application directory. If the process exits unexpectedly, automatic patching is disabled and the interface allows you to restart it. Closing the application also cleans up its child process through a Windows job object.

### Port and command-line modes

To use a different local HTTP port:

```powershell
.\run.ps1 -Port 8080
```

The patcher address and web-interface button use that port automatically. The managed server binds to `127.0.0.1`; port 80 is the default.

From inside `dist/Peacock/`, the executable accepts:

```powershell
.\Peacock.exe --port 8080
.\Peacock.exe --headless --port 8080
.\Peacock.exe --server-only --port 8080
.\Peacock.exe --tools
.\Peacock.exe --help
```

`--headless` runs the server and automatic patching without a window. `--server-only` starts the server without scanning or patching game processes. Ctrl+C stops either console mode. The GUI opens when neither mode is specified.

`Start Peacock.cmd` opens the combined interface. `Start Server.cmd` uses server-only mode. `Tools.cmd` and `--tools` open the embedded server's interactive utilities.

## Configuration and development

- Edit `dist/Peacock/options.ini` for the existing installation, then restart the server. `config/options.ini` supplies defaults only when settings do not already exist.
- Edit `src/Peacock/Hosting/` for lifecycle and launcher behavior, and `src/Peacock/HitmanPatcher/` for the patcher interface and game patch definitions.
- Edit `src/Peacock/Server/index.js` for server behavior and `src/Peacock/WebUI/` for browser behavior.
- Edit JSON under `data/`, then rebuild to update the packaged `.prp` resources automatically.
- Back up `dist/Peacock/userdata/` before replacing or moving an installation. Patcher preferences remain at `%APPDATA%/PeacockProject/peacock_patcher2.conf`.

The recovered JavaScript is bundled code with shortened identifiers; original TypeScript, JSX, and module boundaries were not supplied. `docs/reference/` contains navigation indexes and excerpts. [Recovery notes](docs/RECOVERY.md) explain provenance and regeneration.

## Checks

```powershell
npm run check
powershell -NoProfile -File tests/ServerHost.Tests.ps1 -Integration
```

Build first. Tests exercise startup, graceful stop, restart, child cleanup, port conflicts, early exit, cancellation, and unexpected exit with an isolated test process. The integration option verifies extracted executable hashes and starts the compiled server in an isolated directory without loose JavaScript or a separate Node executable. It checks the web interface without patching a game. Game integration and interactive GUI behavior still require manual testing.

## Troubleshooting

- **Port in use:** close the other server or launch with `--port 8080`. The application will not attach to an unrelated server already using its port.
- **Missing server files:** rebuild and run `dist/Peacock/Peacock.exe`; do not copy only the executable out of its application folder.
- **Startup failed:** read the server output and logs, correct the issue, then click **Start server**.
- **Game not patched:** check status and the definitions in `src/Peacock/HitmanPatcher.PatchDefinitions/` for your game version.
- **Progress missing:** stop the application and restore the saved `userdata/` folder.

## Licensing

This is an unofficial, modified distribution of The Peacock Project. The supplied HTML identifies Peacock code as AGPL-3.0-or-later. Preserve existing copyright and license notices. Dependencies have separate terms; see [web notices](src/Peacock/WebUI/THIRDPARTYNOTICES.txt), the server's bundled license comments, and [the Node.js license](vendor/original/nodedist/LICENSE).
