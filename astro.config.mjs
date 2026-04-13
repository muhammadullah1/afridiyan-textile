import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://afridiantextile.com',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});