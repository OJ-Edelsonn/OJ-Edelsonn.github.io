import type { Locale } from '../config/site';

export const routePairs = {
  home: { es: '/es/', en: '/en/' },
  projects: { es: '/es/proyectos/', en: '/en/projects/' },
  credentials: { es: '/es/credenciales/', en: '/en/credentials/' },
  about: { es: '/es/sobre-mi/', en: '/en/about/' },
  insights: { es: '/es/publicaciones/', en: '/en/insights/' },
  resume: { es: '/es/cv/', en: '/en/resume/' },
  contact: { es: '/es/contacto/', en: '/en/contact/' },
  notFound: { es: '/es/404/', en: '/en/404/' },
} as const;

export type RouteKey = keyof typeof routePairs;

export function getRoute(route: RouteKey, locale: Locale): string {
  return routePairs[route][locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}` || '/';
}
