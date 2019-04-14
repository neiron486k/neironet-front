import { getReviews } from "../../../api/review";
import { setReviews } from "./reviewAction";

export const getReviewData = () => {
    return async dispatch => {
        const response = await getReviews();
        dispatch(setReviews(response.data));
    }
};