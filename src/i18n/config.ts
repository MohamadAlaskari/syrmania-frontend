import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./de.json";
import ar from "./ar.json";

const resources = {
  de: { translation: de },
  ar: { translation: ar },
};

// نحدد اللغة من الرابط
const getCurrentLocale = (): string => {
  if (typeof window !== "undefined") {
    const pathLang = window.location.pathname.split("/")[1];
    if (pathLang === "de" || pathLang === "ar") return pathLang;
  }
  return "de"; // fallback
};

i18n.use(initReactI18next).init({
  resources,
  lng: getCurrentLocale(),
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
