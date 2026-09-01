export const SITE = {
  name: 'Edelson Anghuelo Orihuela Jara',
  shortName: 'Edelson Orihuela',
  email: 'eoj.secu@gmail.com',
  institutionalEmail: '100067099@cientifica.edu.pe',
  phones: [
    {
      display: '+51 921 215 853',
      tel: 'tel:+51921215853',
      whatsapp: 'https://wa.me/51921215853',
    },
    {
      display: '+51 900 749 742',
      tel: 'tel:+51900749742',
      whatsapp: 'https://wa.me/51900749742',
    },
  ],
  university: 'Universidad Científica del Sur',
  location: 'Lima, Perú',
  portfolio: 'https://oj-edelsonn.github.io/',
  github: 'https://github.com/OJ-Edelsonn',
  linkedin: 'https://www.linkedin.com/in/edelson-anghuelo-orihuela-jara-07b299329/',
  resumePath: '/cv/CV_Edelson_Orihuela_Jara.pdf',
  defaultLocale: 'es',
  locales: ['es', 'en'],
} as const;

export type Locale = (typeof SITE.locales)[number];
