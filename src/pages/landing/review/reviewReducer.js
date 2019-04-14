import { SET_REVIEWS } from "./reviewAction";

const initState  = {
    reviews: []
};

const reviewReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_REVIEWS:
            return {
                reviews: action.reviews
            };
        default:
            return state
    }
};

export default reviewReducer;