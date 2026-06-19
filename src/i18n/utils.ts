// src/i18n/utils.ts
import { zh } from './zh';
import { en } from './en';

export type Lang = 'zh' | 'en';

export function getT(lang: Lang) {
  return lang === 'en' ? en : zh;
}

// Given current pathname and target lang, return the equivalent URL in that lang
export function getLangUrl(pathname: string, targetLang: Lang): string {
  const isCurrentlyEn = pathname.startsWith('/en');
  if (targetLang === 'en') {
    return isCurrentlyEn ? pathname : `/en${pathname === '/' ? '' : pathname}`;
  } else {
    return isCurrentlyEn ? pathname.replace(/^\/en/, '') || '/' : pathname;
  }
}

// Get current lang from pathname
export function getLang(pathname: string): Lang {
  return pathname.startsWith('/en') ? 'en' : 'zh';
}
