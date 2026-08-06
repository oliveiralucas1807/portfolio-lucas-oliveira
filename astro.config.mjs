import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://oliveiralucas1807.github.io',
  base: process.env.DEPLOY_BASE || '/',
  output: 'static',
  publicDir: './public-site',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
