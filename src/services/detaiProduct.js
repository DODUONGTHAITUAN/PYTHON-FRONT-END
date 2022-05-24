import axios from '../axios';

const baseUrl = '/detail_product';

const detailProductService = {};

detailProductService.getData = (id) => {
    return axios.get(`${baseUrl}/get-by-id`, { params: { id } });
};

detailProductService.makeData = (data) => {
    return axios.post(`${baseUrl}/create`, data);
};

detailProductService.createOrUpdate = (data) => {
    return axios.post(`${baseUrl}/create-or-update`, data);
};

export default detailProductService;
