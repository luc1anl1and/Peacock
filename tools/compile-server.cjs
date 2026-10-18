const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { spawnSync } = require("child_process");
const { inject } = require("postject");

const root = path.resolve(__dirname, "..");
const build = path.join(root, "artifacts", "server");
const embedded = path.join(root, "src", "Peacock", "Server", "Embedded");
const runtime = path.join(root, "vendor", "original", "nodedist", "node.exe");
const source = fs.readFileSync(
  path.join(root, "src/Peacock/Server/index.js"),
  "utf8",
);
const bootstrap = fs.readFileSync(
  path.join(root, "src/Peacock/Server/bootstrap.cjs"),
  "utf8",
);
const fingerprint = crypto
  .createHash("sha256")
  .update(source)
  .update(bootstrap)
  .update(fs.readFileSync(__filename))
  .update(fs.readFileSync(runtime))
  .digest("hex");
const payload = path.join(embedded, "Peacock.Server.bytes");
const manifest = path.join(embedded, "server-build.json");
const hash = (file) =>
  crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
if (fs.existsSync(payload) && fs.existsSync(manifest)) {
  const old = JSON.parse(fs.readFileSync(manifest, "utf8"));
  if (
    old.inputsSha256 === fingerprint &&
    old.executableSha256 === hash(payload)
  ) {
    console.log("Compiled server bytes are current.");
    process.exit(0);
  }
}
fs.mkdirSync(build, { recursive: true });
const main = path.join(build, "server-main.cjs");
// SEA runs from the executable's location; Peacock expects assets in its working directory.
const prelude =
  'require = require("node:module").createRequire(require("node:path").join(process.cwd(), "chunk0.js"));\n__dirname = process.cwd();\n__filename = require("node:path").join(__dirname, "chunk0.js");\n';
if (!bootstrap.includes("require('./chunk0.js');"))
  throw new Error("Bootstrap entry point changed.");
fs.writeFileSync(
  main,
  prelude + bootstrap.replace("require('./chunk0.js');", () => source),
);
const configuration = path.join(build, "sea-config.json");
const blob = path.join(build, "server.blob");
fs.writeFileSync(
  configuration,
  JSON.stringify(
    {
      main,
      output: blob,
      disableExperimentalSEAWarning: true,
      useSnapshot: false,
      useCodeCache: true,
    },
    null,
    2,
  ),
);
const compilation = spawnSync(
  runtime,
  ["--experimental-sea-config", configuration],
  { cwd: root, encoding: "utf8" },
);
if (compilation.status !== 0)
  throw new Error(compilation.stderr || "Server compilation failed.");
const executable = path.join(build, "Peacock.Server.exe");
fs.copyFileSync(runtime, executable);
// Remove the original certificate from our copy before modifying its PE resources.
const pe = fs.readFileSync(executable);
const optionalHeader = pe.readUInt32LE(0x3c) + 24;
if (pe.readUInt16LE(optionalHeader) !== 0x20b)
  throw new Error("Expected the bundled x64 Node.js runtime.");
const securityDirectory = optionalHeader + 112 + 4 * 8;
const certificateOffset = pe.readUInt32LE(securityDirectory);
const certificateLength = pe.readUInt32LE(securityDirectory + 4);
pe.writeBigUInt64LE(0n, securityDirectory);
fs.writeFileSync(
  executable,
  certificateOffset > 0 && certificateOffset + certificateLength === pe.length
    ? pe.subarray(0, certificateOffset)
    : pe,
);
(async () => {
  await inject(executable, "NODE_SEA_BLOB", fs.readFileSync(blob), {
    sentinelFuse: "NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2",
  });
  if (fs.readFileSync(executable).subarray(0, 2).toString() !== "MZ")
    throw new Error("Compiler did not produce a Windows executable.");
  // The server executable is fully compiled before its bytes become a C# resource.
  fs.mkdirSync(embedded, { recursive: true });
  fs.copyFileSync(executable, payload);
  fs.writeFileSync(
    manifest,
    JSON.stringify(
      {
        format: "Node.js SEA with V8 code cache",
        platform: "win32-x64",
        nodeVersion: "22.18.0",
        inputsSha256: fingerprint,
        executableSha256: hash(payload),
        executableBytes: fs.statSync(payload).size,
      },
      null,
      2,
    ) + "\n",
  );
  console.log(`Compiled server: ${executable}`);
  console.log(
    `Embedded byte payload: ${payload} (${fs.statSync(payload).size} bytes)`,
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
