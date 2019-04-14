import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const setLanguage = lng => {
    if(lng) {
        instance.defaults.headers.common['Accept-Language'] = lng;
    }
};

export default instance;