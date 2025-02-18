import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

/// To add new supported language, add a new json file in the i18n folder and import it here
/// Then add the new language to the resources object

import enTranslation from './en/translation.json';
import frTranslation from './fr/translation.json';

export function init() {
  i18next.use(initReactI18next).init({
    lng: 'en',
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: 'en',
  });
}

export function changeLocale(locale?: string) {
  i18next.changeLanguage(locale);
}

export function useTranslations() {
  return useTranslation();
}
