import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        "Your cart is empty": "Your cart is empty",
        hello: "Hello",
        home: "Home",
        about: "About",
        contact: "Contact",
      },
    },
    pt: {
      translation: {
        "Your cart is empty": "Seu carrinho está vazio ",
        hello: "Olá",
        home: "Início",
        about: "Sobre",
        contact: "Contato",
      },
    },
  },
});
export default i18n;
