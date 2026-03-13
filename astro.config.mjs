import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://horecaorders.com',
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'ro', locales: { ro: 'ro-RO' } },
    }),
  ],
  output: 'static',
});
