import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const root = resolve(process.argv[2] || 'dist');
const htmlFiles = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (path.endsWith('.html')) htmlFiles.push(path);
  }
}
walk(root);
const failures = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const ref of refs) {
    if (/^(https?:|mailto:|#|data:)/.test(ref)) continue;
    const clean = ref.split(/[?#]/)[0];
    const target = clean.startsWith('/') ? join(root, clean) : resolve(dirname(file), clean);
    const candidates = [target, join(target, 'index.html'), `${target}.html`];
    if (!candidates.some(existsSync)) failures.push(`${file}: ${ref}`);
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`OK: ${htmlFiles.length} HTML files, no broken internal asset or page references.`);
