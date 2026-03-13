import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://horecaorders.com',
  integrations: [
    tailwind(),
    sitemap({
      i18n: { defaultLocale: 'ro', locales: { ro: 'ro-RO' } },
    }),
  ],
  output: 'static',
});
