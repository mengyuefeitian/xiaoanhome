// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.xiaoanhome.xyz',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
