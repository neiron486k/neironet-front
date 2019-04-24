import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "./snackbarAction";

const initState = {
    open: false,
    message: ''
};

const snackbarReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_SNACKBAR:
            return {
                open: true,
                message: action.message
            };
        case CLOSE_SNACKBAR:
            return {
                ...state,
                open: false
            };
        default: {
            return state
        }
    }
};

export default snackbarReducer;