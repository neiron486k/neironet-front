import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import localeReducer from "../common/locale/localeReducer";
import serviceReducer from "../pages/landing/service/serviceReducer";

const rootReducer = combineReducers({
    form: formReducer,
    locale: localeReducer,
    service: serviceReducer
});

export default rootReducer