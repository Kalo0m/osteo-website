import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.osteopathie-nantes.fr',
  integrations: [sitemap()],
});
