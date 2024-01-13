import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import inglesJson from "./traducoes/ingles.json";
import ptbrJson from "./traducoes/ptbr.json";

i18n.use(initReactI18next).init({
  fallbackLng: "us",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    us: inglesJson,
    ptbr: ptbrJson,
  },
});

export default i18n;
