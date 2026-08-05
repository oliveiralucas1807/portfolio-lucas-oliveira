import { spawnSync } from 'node:child_process';

spawnSync('npm.cmd', ['run', 'dev', '--', '--host', '127.0.0.1'], {
  cwd: process.cwd(),
  stdio: 'inherit',
});

setInterval(() => {}, 2_147_483_647);
