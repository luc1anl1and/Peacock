# Peacock Cracked Decomplilation

Peacock is a local server replacement for the HITMAN World of Assassination games. The Node.js server handles profiles, progression, challenges, mastery, contracts, loadouts, and game menus. The React web interface manages local profiles and progress. The Windows C# patcher redirects a running game's requests to the selected server.

This is recovered code from a modified, unofficial distribution. The server identifies itself as 8.7.0 and the patcher assembly as 9.0.1.0. The JavaScript is readable bundled code; original TypeScript, JSX, and module boundaries were not present in the release.

## Layout

```text
src/
  server/index.js       Server application and bundled dependencies
  webui/                Browser HTML, JavaScript, CSS, and notices
  patcher/              C# Windows Forms project and patch definitions
data/                   Editable contracts, challenges, and mastery JSON
config/options.ini      Default server settings
vendor/original/        Unmodified original distribution and binary assets
tools/                  Packaging, verification, and recovery utilities
docs/                   Recovery notes, reports, and source indexes
dist/Peacock/           Built application (ignored by Git)
Peacock.slnx            .NET solution
build.ps1               Compile and package the application
run.ps1                 Start the built local server
```

## Requirements

Use Windows x64 with the .NET 10 SDK and Node.js/npm on PATH. The recovered C# project uses C# 14 and targets .NET Framework 4.6; running the patcher requires a compatible .NET Framework installation. The application uses the bundled Node.js runtime from `vendor/original/nodedist/`; `.nvmrc` specifies version 22.18.0. Python 3 is needed only for recovery tooling.

## Build

From the repository root in PowerShell:

```powershell
.\build.ps1
```

This compiles the patcher in Release mode, installs the helper dependencies if missing, packages all JSON in `data/` into `.prp` files, and copies the server, web interface, images, and runtime into `dist/Peacock/`. Subsequent builds preserve the application's existing `options.ini`, player data, and saved sessions. Stop the running server and patcher before rebuilding.

For a Debug build:

```powershell
.\build.ps1 -Configuration Debug
```

To compile only the patcher, open `Peacock.slnx` in an IDE supporting the .NET 10 SDK or run:

```powershell
dotnet build Peacock.slnx -c Release
```

The standalone executable is `src/patcher/bin/Release/net46/PeacockPatcher.exe`. The server and web interface are already executable JavaScript; they need no separate transpilation step.

## Run

Start the local server from the repository root:

```powershell
.\run.ps1
```

Open `http://127.0.0.1/` for the web interface. Start `dist/Peacock/PeacockPatcher.exe`, select `127.0.0.1` with HTTP enabled, then launch a supported HITMAN game. Check the patcher's status to confirm that the process was detected and patched. Keep the server open while playing; close the game before stopping the server with Ctrl+C.

To choose a different port:

```powershell
.\run.ps1 -Port 8080
```

Use `http://127.0.0.1:8080/` and set the patcher address to `127.0.0.1:8080`. The launcher binds to localhost by default. `-HostAddress` selects another bind address.

You can also double-click `dist/Peacock/Start Server.cmd`, or run `nodedist\node.exe chunk0.js` from inside `dist/Peacock/`. Direct invocation reads the `HOST` and `PORT` environment variables; its defaults are `0.0.0.0` and port 80. `Tools.cmd` opens the interactive utilities.

## Configure and develop

- Edit `config/options.ini` to change defaults for newly assembled applications. Edit `dist/Peacock/options.ini` to configure the existing application, then restart the server.
- Edit `src/server/index.js` for server behavior and `src/webui/` for the browser interface.
- Edit JSON in `data/`, then rebuild to update the packaged resources automatically.
- Edit `src/patcher/` for the Windows interface, process detection, and game patch definitions, then rebuild.
- Back up `dist/Peacock/userdata/` before moving or replacing the application. Patcher preferences are stored at `%APPDATA%/PeacockProject/peacock_patcher2.conf`.

The files in `docs/reference/` are source indexes and reading excerpts, not independently executable modules. The original distribution in `vendor/original/` is preserved for assets, provenance, and reproducible recovery.

Optional npm shortcuts are `npm run setup`, `npm run build`, `npm start`, and `npm run check`. Checks validate JavaScript syntax; the normal build validates C# compilation. Game integration and GUI behavior have not been tested.

## Troubleshooting

- **Port already in use:** launch with `-Port 8080` and update the patcher address.
- **Missing resources:** run the build and launch with `run.ps1`, which sets the correct working directory.
- **Game not patched:** check the patcher status, selected server, and definitions in `src/patcher/HitmanPatcher.PatchDefinitions/` for your game version.
- **Progress missing:** stop the server and restore your backed-up `userdata/` to the built application's directory.

See [recovery notes](docs/RECOVERY.md) for the source recovery process and its limits.

## Licensing

This is an unofficial, modified distribution of The Peacock Project. The supplied HTML identifies Peacock code as AGPL-3.0-or-later. Preserve all copyright and license notices. Dependencies carry separate terms; see [web notices](src/webui/THIRDPARTYNOTICES.txt), the server's bundled license comments, and [the Node.js license](vendor/original/nodedist/LICENSE).
