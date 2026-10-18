# Source recovery

The combined C# application lives in `src/Peacock/`, editable game data in `data/`, and default settings in `config/`. The original distribution is preserved byte-for-byte in `vendor/original/`.

## Recovered content

- 37 C# source files, a Windows Forms project, patch definitions, assembly metadata, and embedded resources from `PeacockPatcher.exe`.
- Complete formatted server and browser JavaScript bundles, plus browser CSS and HTML. Browser assets were renamed to `app.js` and `styles.css`, and HTML references were updated.
- 133 MessagePack `.prp` packages decoded into JSON under `data/`.
- Source indexes and ordered reading excerpts under `docs/reference/server/` and `docs/reference/webui/`.

Paths in this guide are relative to the repository root. Reports are in `docs/recovery/`: `input-manifest.json` contains hashes and sizes of all 4,319 original files; `inventory.json` records file types; `validation.json` records JavaScript comparisons.

## Reproduce

Requires .NET 10 SDK, Node.js/npm, and Python 3. Run from the repository root:

```powershell
powershell -NoProfile -File tools/recover.ps1
```

Recovery overwrites code and data generated from the original distribution. Preserve your changes before running it. It installs locked helper dependencies and ILSpy CLI 11.1.0.9782, writes the original patcher to `docs/recovery/original-patcher/` without overwriting the integrated C# application, formats JavaScript and browser assets, decodes data, indexes source, records input hashes, and compiles the patcher. Normal development only needs `build.ps1`, which does not regenerate source.

## Verification

The recovered JavaScript bundles passed syntax checks and canonical code comparison against the originals. Canonicalization parses both with Babel and omits locations, comments, and raw literal spellings before generating comparable JavaScript. The C# project compiles; warnings about unassigned Windows Forms components fields are expected. Server-host lifecycle tests and an isolated real-server HTTP startup/shutdown check pass. Interactive GUI behavior and game integration have not been tested.

Normal builds encode the JSON back into MessagePack. Encoded bytes can differ from the original packages while decoding to the same JSON data. Configuration and player data in an existing application are preserved during packaging.

## Limits

Source maps were not supplied. Original TypeScript types, JSX/TSX, development filenames and module boundaries, most comments, and shortened identifiers cannot be reliably reconstructed. The C# project is reconstructed from assembly metadata and IL rather than the original designer files and comments.

The bundled Node.js executable is a native third-party runtime; its original C/C++ source was not recovered. Images and the three `.rpkg` game packages remain binary assets. They are included during application assembly from `vendor/original/`.

Original notices remain in the source and original distribution. The release identifies itself as modified and unofficial. Recovery does not grant additional rights or replace upstream license terms.

## Combined application

The maintained project combines the recovered patcher with new C# server hosting and lifecycle controls. Its server and browser sources are under `src/Peacock/Server/` and `src/Peacock/WebUI/`. The server still runs on bundled Node.js as a managed child process; this integration is not a native C# port of its logic. Normal MSBuild builds package the complete application automatically.

## Compiled and embedded server

The current server is compiled with Node.js SEA and V8 code cache before the C# build. `tools/compile-server.cjs` writes the standalone executable under `artifacts/server/`, then copies its bytes to `src/Peacock/Server/Embedded/Peacock.Server.bytes` and records hashes in `server-build.json`. The C# project embeds the payload as a binary resource. Source remains editable under `src/Peacock/Server/`.

At runtime, C# verifies and extracts the executable into the user's local application-data cache and manages it as before. The server resolves assets against its working directory, so its cached executable can use the normal installation data. Deployment no longer includes loose server JavaScript or a separate Node executable. Node's license is copied to `dist/Peacock/licenses/Node.js.txt`, and bundled server notices are exported beside it.

SEA code cache is specific to Windows x64 and the included Node.js version. Node's cached SEA format does not support dynamic import; the original TypeScript plugin-development path that imports `esbuild-wasm` is not supported in this compiled distribution. Normal bundled-server startup and HTTP service pass integration checks.
