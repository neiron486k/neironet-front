import { SET_SERVICES } from "./serviceAction";

const initState = {
    services: []
};

const serviceReducer  = (state = initState, action) => {
    switch (action.type) {
        case SET_SERVICES:
            return {
                services: action.services
            };
        default:
            return state
    }
};

export default serviceReducer