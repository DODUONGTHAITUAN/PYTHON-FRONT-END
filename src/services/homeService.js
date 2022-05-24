import axios from "../axios";

const homeService = {
    getAllProductService: () => {
        return axios.get("/products");
    },

    handleLoginService: (user) => {
        return axios.post("/auth/login", user);
    },
};

export default homeService;
