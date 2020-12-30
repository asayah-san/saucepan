import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en_strings from './translations/en.json';

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: en_strings
        }
    },
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },

    react: {
        wait: true
    }
}).then();

export default i18n;