import axios from "../utils/axios";

export const getReviews = async () => {
    return await axios.get('/reviews')
};