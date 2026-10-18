const fs = require("fs"),
  path = require("path"),
  { unpack } = require("msgpackr");
let count = 0;
function visit(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) visit(p);
    else if (p.endsWith(".prp")) {
      const dst = path.join(
        "data",
        path
          .relative("vendor/original/resources", p)
          .replace(/\.prp$/, ".json"),
      );
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.writeFileSync(
        dst,
        JSON.stringify(unpack(fs.readFileSync(p)), null, 2) + "\n",
      );
      count++;
    }
  }
}
visit("vendor/original/resources");
console.log("Decoded resource packages:", count);
