import { SET_LOCALE } from "./localeAction";

const initState = {
    lang: 'en'
};

const localeReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOCALE:
            return {
                lang: action.lang
            };
        default:
            return state
    }
};

export default localeReducer;