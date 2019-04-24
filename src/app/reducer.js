import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import localeReducer from "../common/locale/localeReducer";
import serviceReducer from "../pages/landing/service/serviceReducer";
import workReducer from "../pages/landing/work/workReducer";
import reviewReducer from "../pages/landing/review/reviewReducer";
import snackbarReducer from "../common/snackbar/snackbarReducer";

const rootReducer = combineReducers({
    form: formReducer,
    locale: localeReducer,
    service: serviceReducer,
    work: workReducer,
    review: reviewReducer,
    snackbar: snackbarReducer
});

export default rootReducer