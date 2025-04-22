// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from './de.json';
import ar from './ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      ar: { translation: ar },
    },
    fallbackLng: 'de',
    lng: 'de',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
