import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const port = Number(process.argv[2] ?? 4322);
const base = '/portfolio-lucas-oliveira';
const root = join(process.cwd(), 'dist');
const mime = {
  '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.txt': 'text/plain',
};

createServer((request, response) => {
  const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
  if (!pathname.startsWith(base)) {
    response.writeHead(404).end();
    return;
  }
  const relative = pathname.slice(base.length).replace(/^\//, '');
  let file = normalize(join(root, relative));
  if (!file.startsWith(root) || !existsSync(file)) {
    response.writeHead(404).end();
    return;
  }
  if (statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(response);
}).listen(port, '127.0.0.1', () => console.log(`Pages preview running on ${port}`));
