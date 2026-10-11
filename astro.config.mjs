// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.xiaoanhome.xyz',
  trailingSlash: 'never',
  // 内联样式表，消除渲染阻塞的 CSS 请求（PageSpeed 反馈）
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // 隐私政策 / 用户协议 / 续费协议等 Legal 页已声明 noindex，不进 sitemap
      filter: (page) =>
        !page.includes('/privacy-policy') &&
        !page.includes('/user-agreement') &&
        !page.includes('/auto-renewal-agreement') &&
        !page.includes('/404'),
    }),
  ],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
