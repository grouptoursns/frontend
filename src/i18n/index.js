import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ru from "./locales/ru.json";
import en from "./locales/en.json";
import {initReactI18next} from "react-i18next";

const options = {
    resources: {
        "en": {
            common: en
        },
        "ru": {
            common: ru
        }
    },
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",

    react: {
        wait: false,
        bindI18n: "languageChanged loaded",
        bindStore: "added removed",
        nsMode: "default"
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options);

export default i18n;