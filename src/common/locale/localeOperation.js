import { setLocaleAction } from "./localeAction";

export const setLocale = lang => {
    return dispatch => {
        dispatch(setLocaleAction(lang));
        localStorage.setItem('i18nLang', lang)
    }
};

export const detectLocale = () => {
    let lang = localStorage.getItem('i18nLang') || navigator.language;

    if (!lang) {
        return 'en'
    }

    return lang.split('-', 1)[0];
};