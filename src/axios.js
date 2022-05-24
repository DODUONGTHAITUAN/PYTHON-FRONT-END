import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

instance.interceptors.response.use((response) => response);

export default instance;
