const fs = require("fs"),
  path = require("path"),
  prettier = require("prettier");
(async () => {
  for (const [src, dst, parser] of [
    ["vendor/original/chunk0.js", "src/server/index.js", "babel"],
    [
      "vendor/original/webui/dist/assets/index-jGXSxClG.js",
      "src/webui/assets/app.js",
      "babel",
    ],
    [
      "vendor/original/webui/dist/assets/index-DH44Uso3.css",
      "src/webui/assets/styles.css",
      "css",
    ],
    ["vendor/original/webui/dist/index.html", "src/webui/index.html", "html"],
  ]) {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    let content = fs.readFileSync(src, "utf8");
    if (parser === "html") {
      content = content
        .replace("index-jGXSxClG.js", "app.js")
        .replace("index-DH44Uso3.css", "styles.css");
    }
    fs.writeFileSync(
      dst,
      await prettier.format(content, { parser }),
    );
    console.log(dst);
  }
  fs.copyFileSync(
    "vendor/original/webui/dist/THIRDPARTYNOTICES.txt",
    "src/webui/THIRDPARTYNOTICES.txt",
  );
})();
