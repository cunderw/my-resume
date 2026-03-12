import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cunderw.dev',
  output: 'static',
  integrations: [tailwind({ configFile: './tailwind.config.js' })],
});
