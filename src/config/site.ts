export const SITE = {
  name: 'Edelson Anghuelo Orihuela Jara',
  shortName: 'Edelson Orihuela',
  email: 'eoj.secu@gmail.com',
  github: 'https://github.com/OJ-Edelsonn',
  linkedin: 'https://www.linkedin.com/in/edelson-anghuelo-orihuela-jara-07b299329/',
  resumePath: '/cv/Edelson_Orihuela_CV.pdf',
  defaultLocale: 'es',
  locales: ['es', 'en'],
} as const;

export type Locale = (typeof SITE.locales)[number];
