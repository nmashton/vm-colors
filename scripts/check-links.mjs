import { readdir, readFile, stat } from "node:fs/promises";
import { join, posix, relative } from "node:path";

const root = new URL("../dist/", import.meta.url).pathname;
const base = "/vm-colors/";
const failures = [];
let checked = 0;

async function* walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function resolveLink(fromFile, href) {
  const path = href.split("#")[0].split("?")[0];
  if (!path || path.startsWith("http://") || path.startsWith("https://")) {
    return null;
  }
  if (path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("data:")) {
    return null;
  }
  if (path.startsWith("#")) return null;

  let target;
  if (path.startsWith(base)) {
    target = join(root, path.slice(base.length));
  } else if (path.startsWith("/")) {
    target = join(root, path.slice(1));
  } else {
    target = join(root, posix.dirname(relative(root, fromFile)), path);
  }

  if (path.endsWith("/") || path === "" || !posix.extname(path)) {
    return join(target, "index.html");
  }
  return target;
}

for await (const file of walk(root)) {
  if (!file.endsWith(".html")) continue;
  const html = await readFile(file, "utf8");
  const matches = [...html.matchAll(/(?:href|src)="([^"]+)"/g)];
  for (const match of matches) {
    const href = match[1];
    const target = resolveLink(file, href);
    if (!target) continue;
    checked += 1;
    if (!(await exists(target))) {
      failures.push({
        file: relative(root, file),
        href,
        target: relative(root, target),
      });
    }
  }
}

if (failures.length) {
  console.error(`Broken internal links: ${failures.length}`);
  for (const failure of failures.slice(0, 40)) {
    console.error(`  ${failure.file}: ${failure.href} -> ${failure.target}`);
  }
  process.exit(1);
}

console.log(`Checked ${checked} internal links and assets; all present.`);
