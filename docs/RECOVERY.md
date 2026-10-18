# Source recovery

The working project lives in `src/`, editable game data in `data/`, and default settings in `config/`. The original distribution is preserved byte-for-byte in `vendor/original/`.

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

Recovery overwrites code and data generated from the original distribution. Preserve your changes before running it. It installs locked helper dependencies and ILSpy CLI 11.1.0.9782, regenerates the C# project, formats JavaScript and browser assets, decodes data, indexes source, records input hashes, and compiles the patcher. Normal development only needs `build.ps1`, which does not regenerate source.

## Verification

The recovered JavaScript bundles passed syntax checks and canonical code comparison against the originals. Canonicalization parses both with Babel and omits locations, comments, and raw literal spellings before generating comparable JavaScript. The C# project compiles; warnings about unassigned Windows Forms components fields are expected. Application behavior, GUI operation, and game integration have not been tested.

Normal builds encode the JSON back into MessagePack. Encoded bytes can differ from the original packages while decoding to the same JSON data. Configuration and player data in an existing application are preserved during packaging.

## Limits

Source maps were not supplied. Original TypeScript types, JSX/TSX, development filenames and module boundaries, most comments, and shortened identifiers cannot be reliably reconstructed. The C# project is reconstructed from assembly metadata and IL rather than the original designer files and comments.

The bundled Node.js executable is a native third-party runtime; its original C/C++ source was not recovered. Images and the three `.rpkg` game packages remain binary assets. They are included during application assembly from `vendor/original/`.

Original notices remain in the source and original distribution. The release identifies itself as modified and unofficial. Recovery does not grant additional rights or replace upstream license terms.
