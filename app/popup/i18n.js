import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pt from './locales/pt.json';

const uiLocale = chrome.i18n.getUILanguage().split('-')[0];

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      pt,
    },
    lng: uiLocale,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
