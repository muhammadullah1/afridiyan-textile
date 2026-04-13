import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://muhammadullah1.github.io',
  base: '/afridiyan-textile',
  integrations: [tailwind()],
});
