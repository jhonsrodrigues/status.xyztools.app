import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://status.xyztools.app',
  output: 'static',
  build: { format: 'directory' }
});