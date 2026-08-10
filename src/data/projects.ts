import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../config/site';

export type ProjectEntry = CollectionEntry<'projects'>;
export type CareerArea = 'business' | 'systems';

const labels = {
  es: {
    categories: {
      'data-bi': 'Datos & BI',
      consulting: 'Consultoría & procesos',
      'systems-web': 'Sistemas & web',
      'operations-logistics': 'Operaciones & logística',
      'business-strategy': 'Estrategia & negocio',
      'architecture-research': 'Arquitectura & investigación',
    },
    status: {
      published: 'Publicado',
      'documentation-improvement': 'En mejora documental',
      'in-progress': 'En desarrollo',
    },
    nature: {
      official: 'Datos oficiales',
      public: 'Fuentes públicas',
      synthetic: 'Datos sintéticos',
      simulated: 'Caso simulado',
      academic: 'Contexto académico',
    },
    type: {
      personal: 'Proyecto personal',
      academic: 'Proyecto académico',
    },
    collaboration: {
      individual: 'Individual',
      group: 'Grupal',
      'not-specified': 'Autoría académica no especificada',
    },
  },
  en: {
    categories: {
      'data-bi': 'Data & BI',
      consulting: 'Consulting & processes',
      'systems-web': 'Systems & web',
      'operations-logistics': 'Operations & logistics',
      'business-strategy': 'Business strategy',
      'architecture-research': 'Architecture & research',
    },
    status: {
      published: 'Published',
      'documentation-improvement': 'Documentation in progress',
      'in-progress': 'In progress',
    },
    nature: {
      official: 'Official data',
      public: 'Public sources',
      synthetic: 'Synthetic data',
      simulated: 'Simulated case',
      academic: 'Academic context',
    },
    type: {
      personal: 'Personal project',
      academic: 'Academic project',
    },
    collaboration: {
      individual: 'Individual',
      group: 'Group',
      'not-specified': 'Academic authorship not specified',
    },
  },
} as const;

export function projectHref(project: ProjectEntry): string {
  return project.data.locale === 'es'
    ? `/es/proyectos/${project.data.slug}/`
    : `/en/projects/${project.data.slug}/`;
}

export function categoryLabel(category: string, locale: Locale): string {
  return (
    labels[locale].categories[category as keyof (typeof labels)[Locale]['categories']] ?? category
  );
}

export function statusLabel(status: ProjectEntry['data']['status'], locale: Locale): string {
  return labels[locale].status[status];
}

export function natureLabel(
  nature: ProjectEntry['data']['dataNature'][number],
  locale: Locale,
): string {
  return labels[locale].nature[nature];
}

export function typeLabel(type: ProjectEntry['data']['projectType'], locale: Locale): string {
  return labels[locale].type[type];
}

export function collaborationLabel(
  collaboration: ProjectEntry['data']['collaboration'],
  locale: Locale,
): string {
  return labels[locale].collaboration[collaboration];
}
