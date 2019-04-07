import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import localeReducer from "../common/locale/localeReducer";

const rootReducer = combineReducers({
    form: formReducer,
    locale: localeReducer
});

export default rootReducer