import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Cookies } from "react-cookie";

import roTranslation from "./locales/ro/translation.json";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";
import trTranslation from "./locales/tr/translation.json";

const cookies = new Cookies();
let savedLanguage = cookies.get("i18nextLng") || "ro";

i18n.use(initReactI18next).init({
  resources: {
    ro: {
      translation: roTranslation,
    },
    en: {
      translation: enTranslation,
    },
    tr: {
      translation: trTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", function (lng) {
  cookies.set("i18nextLng", lng, { path: "/" });
});

export default i18n;
