// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.xiaoanhome.xyz';

/**
 * 按页面源文件的真实 mtime 推导 lastmod。
 * 不用 new Date()：那样全站拿到同一个时间戳、每次构建整体刷新，
 * Google/Bing 会判定 lastmod 不可信并直接忽略。取不到就留空（宁缺毋滥）。
 */
function lastmodOf(pageUrl) {
  const path = pageUrl.replace(SITE, '') || '/';
  // 页面既可能是目录式（/foo/index.astro），也可能是平铺式（/foo.astro，如版本详情页）
  const candidates =
    path === '/'
      ? ['./src/pages/index.astro']
      : [
          `./src/pages${path}/index.astro`,
          `./src/pages${path}.astro`,
        ];
  for (const rel of candidates) {
    try {
      return statSync(fileURLToPath(new URL(rel, import.meta.url))).mtime.toISOString();
    } catch {
      /* 该候选不存在，继续试下一个 */
    }
  }
  return undefined;
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  // 内联样式表，消除渲染阻塞的 CSS 请求（PageSpeed 反馈）
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // 逐条按源文件修改时间输出 lastmod
      serialize(item) {
        const lastmod = lastmodOf(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
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
