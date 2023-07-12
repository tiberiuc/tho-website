import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import roTranslation from "./locales/ro/translation.json";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ro: {
      translation: roTranslation,
    },
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: "ro",
  // fallbackLng: "ro",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
