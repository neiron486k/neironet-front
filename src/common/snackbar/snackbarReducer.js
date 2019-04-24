import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "./snackbarAction";

const initState = {
    open: false,
    message: '',
    variant: 'default'
};

const snackbarReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_SNACKBAR:
            return {
                open: true,
                message: action.message,
                variant: action.variant || state.variant,
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