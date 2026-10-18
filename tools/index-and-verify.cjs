const fs = require("fs"),
  path = require("path"),
  parser = require("@babel/parser");
const ignored = new Set([
  "start",
  "end",
  "loc",
  "extra",
  "leadingComments",
  "innerComments",
  "trailingComments",
  "comments",
  "tokens",
  "errors",
]);
function normalize(x) {
  if (Array.isArray(x)) return x.map(normalize);
  if (x && typeof x === "object")
    return Object.fromEntries(
      Object.entries(x)
        .filter(([k]) => !ignored.has(k))
        .map(([k, v]) => [k, normalize(v)]),
    );
  return x;
}
let results = [];
for (const [original, recovered, label] of [
  ["vendor/original/chunk0.js", "src/server/index.js", "server"],
  [
    "vendor/original/webui/dist/assets/index-jGXSxClG.js",
    "src/webui/assets/app.js",
    "webui",
  ],
]) {
  const text = fs.readFileSync(recovered, "utf8"),
    ast = parser.parse(text, { sourceType: "unambiguous" }),
    before = parser.parse(fs.readFileSync(original, "utf8"), {
      sourceType: "unambiguous",
    });
  const generate = require("@babel/generator").default;
  const canonical = (x) =>
    generate(normalize(x), { minified: true, comments: false }).code;
  if (canonical(ast.program) !== canonical(before.program))
    throw new Error("Canonical JavaScript mismatch: " + recovered);
  const symbols = [],
    parts = [];
  let part = "",
    start = 1;
  const dir = `docs/reference/${label}/parts`;
  fs.mkdirSync(dir, { recursive: true });
  function flush() {
    if (!part) return;
    const filename = `part-${String(parts.length + 1).padStart(3, "0")}.js`;
    fs.writeFileSync(
      path.join(dir, filename),
      `// Reading excerpt from ${path.basename(recovered)}, starting at line ${start}.\n// Shares bundle scope; use the complete bundle for execution.\n${part}\n`,
    );
    parts.push({ file: `parts/${filename}`, line: start });
    part = "";
  }
  for (const node of ast.program.body) {
    if (part.length > 150000) flush();
    if (!part) start = node.loc.start.line;
    part += text.slice(node.start, node.end) + "\n";
    const nodes =
      node.type === "VariableDeclaration" ? node.declarations : [node];
    for (const n of nodes) {
      const id = n.id;
      if (id?.type === "Identifier")
        symbols.push({
          name: id.name,
          type: n.init?.type || n.type,
          line: n.loc.start.line,
          part: parts.length + 1,
        });
    }
  }
  flush();
  fs.writeFileSync(
    `docs/reference/${label}/symbols.json`,
    JSON.stringify(
      {
        bundle: path
          .relative(`docs/reference/${label}`, recovered)
          .replaceAll(path.sep, "/"),
        symbols,
        parts,
      },
      null,
      2,
    ) + "\n",
  );
  results.push({
    file: recovered,
    canonicalEquivalent: true,
    symbols: symbols.length,
    parts: parts.length,
  });
}
fs.mkdirSync("docs/recovery", { recursive: true });
fs.writeFileSync(
  "docs/recovery/validation.json",
  JSON.stringify({ javascript: results }, null, 2) + "\n",
);
console.log(JSON.stringify(results));
