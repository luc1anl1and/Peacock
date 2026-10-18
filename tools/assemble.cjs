const fs = require("fs");
const path = require("path");
const { pack } = require("msgpackr");

const root = path.resolve(__dirname, "..");
const configuration = process.argv[2] || "Release";
if (!["Release", "Debug"].includes(configuration))
  throw new Error("Invalid configuration");
const output = path.join(root, "dist", "Peacock");
const original = path.join(root, "vendor", "original");
const patcher = path.join(
  root,
  "src",
  "patcher",
  "bin",
  configuration,
  "net46",
  "PeacockPatcher.exe",
);
if (!fs.existsSync(patcher))
  throw new Error("Compile the patcher with build.ps1 first.");
fs.mkdirSync(output, { recursive: true });

// Copy runtime dependencies, then assemble all maintained code and data.
for (const directory of ["images", "nodedist"]) {
  fs.cpSync(path.join(original, directory), path.join(output, directory), {
    recursive: true,
  });
}
fs.mkdirSync(path.join(output, "resources"), { recursive: true });
for (const file of fs.readdirSync(path.join(original, "resources"))) {
  if (file.endsWith(".rpkg"))
    fs.copyFileSync(
      path.join(original, "resources", file),
      path.join(output, "resources", file),
    );
}
let packages = 0;
function encodeData(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const input = path.join(directory, entry.name);
    if (entry.isDirectory()) encodeData(input);
    else if (entry.name.endsWith(".json")) {
      const relative = path
        .relative(path.join(root, "data"), input)
        .replace(/\.json$/, ".prp");
      const target = path.join(output, "resources", relative);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(
        target,
        pack(JSON.parse(fs.readFileSync(input, "utf8"))),
      );
      packages++;
    }
  }
}
encodeData(path.join(root, "data"));
fs.copyFileSync(
  path.join(root, "src/server/index.js"),
  path.join(output, "chunk0.js"),
);
fs.cpSync(path.join(root, "src/webui"), path.join(output, "webui/dist"), {
  recursive: true,
});
fs.copyFileSync(patcher, path.join(output, "PeacockPatcher.exe"));
fs.copyFileSync(path.join(root, ".nvmrc"), path.join(output, ".nvmrc"));
fs.copyFileSync(path.join(root, "README.md"), path.join(output, "README.md"));
const settings = path.join(output, "options.ini");
if (!fs.existsSync(settings))
  fs.copyFileSync(path.join(root, "config/options.ini"), settings);
fs.writeFileSync(
  path.join(output, "Start Server.cmd"),
  '@echo off\r\npushd "%~dp0"\r\nset HOST=127.0.0.1\r\nnodedist\\node.exe chunk0.js\r\npopd\r\npause\r\n',
);
fs.writeFileSync(
  path.join(output, "Tools.cmd"),
  '@echo off\r\npushd "%~dp0"\r\nnodedist\\node.exe chunk0.js tools\r\npopd\r\npause\r\n',
);
console.log(
  `Built ${output}: patcher, server, web interface, and ${packages} data packages.`,
);
console.log(
  "Existing options.ini, userdata, and session files were preserved.",
);
