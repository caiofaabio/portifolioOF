import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import usTranslation from "../public/locales/us.json";
import brTranslation from "../public/locales/br.json";
import esTranslation from "../public/locales/es.json";

const resources = {
  us: {
    translation: usTranslation,
  },
  br: {
    translation: brTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18next.use(initReactI18next).init({
  resources,
  debug: false,
  lng: "us",
  fallbackLng: "us",
  interpolation: {
    escapeValue: true,
  },
  react: {
    useSuspense: true,
  },
});

export default i18next;
