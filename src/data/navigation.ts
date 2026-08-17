import type { Locale } from '../config/site';
import { getRoute, type RouteKey } from '../i18n/routes';
import { useTranslations } from '../i18n/ui';

export function getNavigation(locale: Locale) {
  const t = useTranslations(locale);
  const items: Array<{ key: RouteKey; label: string }> = [
    { key: 'projects', label: t.projects },
    { key: 'credentials', label: t.credentials },
    { key: 'about', label: t.about },
    { key: 'insights', label: t.insights },
    { key: 'resume', label: t.resume },
    { key: 'contact', label: t.contact },
  ];

  return items.map((item) => ({
    ...item,
    href: getRoute(item.key, locale),
  }));
}
