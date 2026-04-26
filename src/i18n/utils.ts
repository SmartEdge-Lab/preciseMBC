import { ui, languages } from './ui';
import type { Lang, UIKey } from './ui';

export { languages };
export type { Lang };

const localePrefixPattern = /^\/(en|es)(?=\/|$)/;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang][key] ?? ui['en'][key] ?? key) as string;
  };
}

export function stripLangFromPath(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const strippedPath = normalizedPath.replace(localePrefixPattern, '');

  return strippedPath === '' ? '/' : strippedPath;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const strippedPath = stripLangFromPath(path);
  return strippedPath === '/' ? `/${lang}/` : `/${lang}${strippedPath}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}
