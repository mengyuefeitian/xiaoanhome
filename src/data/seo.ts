// src/data/seo.ts
// SEO 结构化数据（schema.org）构造工具
// 原则：所有字段必须来自站点真实数据，不编造价格 / 评分 / 下载量 / 日期

export const SITE = {
  domain: 'https://www.xiaoanhome.xyz',
  name: '小安之家',
  nameEn: 'XiaoAn Home',
  publisher: '小安工作室',
  publisherEn: 'XiaoAn Studio',
  email: 'mengyuefeitian@live.cn',
} as const;

export const absUrl = (path: string): string =>
  `${SITE.domain}${path.startsWith('/') ? path : `/${path}`}`;

/** 站点级组织信息：全站每页都可输出，用于建立「开发者品牌」实体 */
export function organizationSchema(lang: 'zh' | 'en') {
  const zh = lang === 'zh';
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.domain}/#organization`,
    name: zh ? SITE.publisher : SITE.publisherEn,
    alternateName: zh ? SITE.name : SITE.nameEn,
    url: `${SITE.domain}${zh ? '/' : '/en'}`,
    email: SITE.email,
    description: zh
      ? '小安工作室是独立开发者工作室，作品覆盖 HarmonyOS、macOS 与微信小程序三大平台。'
      : 'XiaoAn Studio builds apps for HarmonyOS, macOS and WeChat Mini Program.',
  };
}

/** 站点实体：首页输出，Google 站点名/面包屑会用到 */
export function webSiteSchema(lang: 'zh' | 'en') {
  const zh = lang === 'zh';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.domain}/#website`,
    url: `${SITE.domain}${zh ? '/' : '/en'}`,
    name: zh ? SITE.name : SITE.nameEn,
    inLanguage: zh ? 'zh-CN' : 'en',
    publisher: { '@id': `${SITE.domain}/#organization` },
  };
}

export interface AppSeoInput {
  /** 页面绝对地址 */
  url: string;
  /** 展示名，如「星枢令」 */
  name: string;
  /** 英文名，如 ArcaneKey */
  nameEn?: string;
  /** 一句话介绍 */
  description: string;
  /** 运行平台，取自 i18n 中真实的 platform 字段 */
  platforms: readonly string[];
  /** schema.org 应用子类，如 UtilitiesApplication */
  category: string;
  lang: 'zh' | 'en';
  /** 应用图标或截图（必须是站内真实存在的资源） */
  image?: string;
}

/**
 * 应用结构化数据：搜索引擎识别 App 的核心标记。
 * 不写 offers / aggregateRating / downloadCount —— 站点未提供真实价格与评分数据。
 */
export function softwareApplicationSchema(input: AppSeoInput) {
  const { url, name, nameEn, description, platforms, category, lang, image } = input;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url}#app`,
    name,
    ...(nameEn ? { alternateName: nameEn } : {}),
    description,
    url,
    applicationCategory: category,
    operatingSystem: platforms.join(', '),
    ...(image ? { image: absUrl(image), screenshot: absUrl(image) } : {}),
    author: { '@id': `${SITE.domain}/#organization` },
    publisher: { '@id': `${SITE.domain}/#organization` },
    inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
    isAccessibleForFree: true,
  };
}

export interface Crumb {
  name: string;
  url: string;
}

/** 面包屑：帮助搜索引擎理解层级，搜索结果里可直接显示路径 */
export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface ArticleInput {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  lang: 'zh' | 'en';
  image?: string;
}

/** 版本更新说明：作为 TechArticle 输出，便于「产品名 + 版本号」类检索命中 */
export function techArticleSchema(input: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: { '@type': 'WebPage', '@id': input.url },
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    ...(input.image ? { image: absUrl(input.image) } : {}),
    author: { '@id': `${SITE.domain}/#organization` },
    publisher: { '@id': `${SITE.domain}/#organization` },
    inLanguage: input.lang === 'zh' ? 'zh-CN' : 'en',
  };
}

/** 产品 → 应用类目映射（依据页面真实功能描述归类） */
export const appCategory: Record<string, string> = {
  arcanekey: 'UtilitiesApplication',
  lumibox: 'MultimediaApplication',
  winterFortress: 'LifestyleApplication',
  autovolume: 'UtilitiesApplication',
  autoprint: 'ProductivityApplication',
  ilaunch: 'UtilitiesApplication',
};

/** 产品 → 站内代表图 */
export const appImage: Record<string, string> = {
  arcanekey: '/images/arcanekey-icon.png',
  lumibox: '/images/lumibox-icon.png',
  winterFortress: '/images/winter-fortress-logo.svg',
  autovolume: '/images/autovolume-icon.png',
  autoprint: '/images/autoprint-icon.png',
  ilaunch: '/images/ilaunch-icon.png',
};

/**
 * 产品页一键组装 JSON-LD：SoftwareApplication + BreadcrumbList。
 * app 直接传 i18n 里的 t.apps[key]，字段（name/nameEn/tagline/platform）均为站点真实数据。
 */
export function buildAppJsonLd(
  app: { name: string; nameEn?: string; tagline: string; platform: readonly string[] },
  key: string,
  lang: 'zh' | 'en',
  path: string,
) {
  const homeName = lang === 'zh' ? '小安之家' : 'XiaoAn Home';
  return [
    softwareApplicationSchema({
      url: absUrl(path),
      name: app.name,
      nameEn: app.nameEn,
      description: app.tagline,
      platforms: app.platform,
      category: appCategory[key] ?? 'UtilitiesApplication',
      lang,
      image: appImage[key],
    }),
    breadcrumbSchema([
      { name: homeName, url: `${SITE.domain}${lang === 'zh' ? '/' : '/en'}` },
      { name: app.name, url: absUrl(path) },
    ]),
  ];
}
