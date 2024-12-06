import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English translations
import enBrand from "./locales/en/brand.json";
import enNav from "./locales/en/nav.json";
import enAuth from "./locales/en/auth.json";
import enHome from "./locales/en/home.json";
import enServices from "./locales/en/services.json";
import enBooking from "./locales/en/booking.json";
import enProducts from "./locales/en/products.json";
import enCart from "./locales/en/cart.json";
import enPayment from "./locales/en/payment.json";
import enInvoice from "./locales/en/invoice.json";
import enAdmin from "./locales/en/admin.json";
import enCommon from "./locales/en/common.json";
import enCities from "./locales/en/cities.json";
import enFooter from "./locales/en/footer.json";
import enProfile from "./locales/en/profile.json";
import enOrder from "./locales/en/order.json";
import enNotifications from "./locales/en/notifications.json";

// Arabic translations
import arBrand from "./locales/ar/brand.json";
import arNav from "./locales/ar/nav.json";
import arAuth from "./locales/ar/auth.json";
import arHome from "./locales/ar/home.json";
import arServices from "./locales/ar/services.json";
import arBooking from "./locales/ar/booking.json";
import arProducts from "./locales/ar/products.json";
import arCart from "./locales/ar/cart.json";
import arPayment from "./locales/ar/payment.json";
import arInvoice from "./locales/ar/invoice.json";
import arAdmin from "./locales/ar/admin.json";
import arCommon from "./locales/ar/common.json";
import arCities from "./locales/ar/cities.json";
import arFooter from "./locales/ar/footer.json";
import arProfile from "./locales/ar/profile.json";
import arOrder from "./locales/ar/order.json";
import arNotifications from "./locales/ar/notifications.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enBrand,
          ...enNav,
          ...enAuth,
          ...enHome,
          ...enServices,
          ...enBooking,
          ...enProducts,
          ...enCart,
          ...enPayment,
          ...enInvoice,
          ...enAdmin,
          ...enCommon,
          ...enCities,
          ...enFooter,
          ...enProfile,
          ...enOrder,
          ...enNotifications,
        },
      },
      ar: {
        translation: {
          ...arBrand,
          ...arNav,
          ...arAuth,
          ...arHome,
          ...arServices,
          ...arBooking,
          ...arProducts,
          ...arCart,
          ...arPayment,
          ...arInvoice,
          ...arAdmin,
          ...arCommon,
          ...arCities,
          ...arFooter,
          ...arProfile,
          ...arOrder,
          ...arNotifications,
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    languages: {
      en: { dir: "ltr" },
      ar: { dir: "rtl" },
    },
  });

export const getLanguageDir = (language: string) => {
  return (i18n.options.languages as any)[language]?.dir || "ltr";
};

export default i18n;
