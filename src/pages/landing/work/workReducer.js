import { SET_WORKS } from "./workAction";

const initState = {
    works: []
};

const workReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_WORKS:
            return {
                works: action.works
            };
        default:
            return state
    }
};

export default workReducer