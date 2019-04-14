import { setLocaleAction } from "./localeAction";
import { setLanguage } from "../../utils/axios";

export const setLocale = lang => {
    return dispatch => {
        dispatch(setLocaleAction(lang));
        localStorage.setItem('i18nLang', lang);
        setLanguage(lang);
    }
};

export const detectLocale = () => {
    let lang = localStorage.getItem('i18nLang') || navigator.language;

    if (!lang) {
        return 'en'
    }

    return lang.split('-', 1)[0];
};