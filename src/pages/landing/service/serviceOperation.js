import { getArticles } from "../../../api/article";
import { setServices } from "./serviceAction";

export const getServices = () => {
    return async dispatch => {
        const response = await getArticles('service');
        dispatch(setServices(response.data));
    }
};