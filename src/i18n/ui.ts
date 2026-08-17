import type { Locale } from '../config/site';

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    navigation: 'Navegación principal',
    menu: 'Abrir menú',
    projects: 'Proyectos',
    credentials: 'Credenciales',
    about: 'Sobre mí',
    insights: 'Publicaciones',
    resume: 'CV',
    contact: 'Contacto',
    language: 'Cambiar a inglés',
    theme: 'Cambiar tema de color',
    systemLabel: 'Ingeniería Empresarial y de Sistemas',
    footerNote: 'Datos · Procesos · Sistemas',
  },
  en: {
    skip: 'Skip to content',
    navigation: 'Primary navigation',
    menu: 'Open menu',
    projects: 'Projects',
    credentials: 'Credentials',
    about: 'About',
    insights: 'Insights',
    resume: 'Resume',
    contact: 'Contact',
    language: 'Switch to Spanish',
    theme: 'Change color theme',
    systemLabel: 'Business and Systems Engineering',
    footerNote: 'Data · Processes · Systems',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function useTranslations(locale: Locale) {
  return ui[locale];
}
