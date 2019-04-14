import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import localeReducer from "../common/locale/localeReducer";
import serviceReducer from "../pages/landing/service/serviceReducer";
import workReducer from "../pages/landing/work/workReducer";

const rootReducer = combineReducers({
    form: formReducer,
    locale: localeReducer,
    service: serviceReducer,
    work: workReducer,
});

export default rootReducer