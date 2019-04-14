import { getArticles } from "../../../api/article";
import { setWorks } from "./workAction";

export const getWorks = () => {
    return async dispatch => {
        const response = await getArticles('work');
        dispatch(setWorks(response.data));
    };
}