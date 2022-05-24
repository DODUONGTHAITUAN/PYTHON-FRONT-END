import axios from '../axios';

const baseUrl = 'option';

const optionService = {};

optionService.getOptionsByProductId = (productId) => {
    return axios.get(`${baseUrl}/get-options-by-product-id`, {
        params: { productId },
    });
};

optionService.deleteOptionByid = (optionId) => {
    return axios.delete(`${baseUrl}/delete`, { params: { id: optionId } });
};

optionService.createOrUpdateOption = (option) => {
    return axios.post(`${baseUrl}/create-or-update`, { ...option });
};

// optionService.createOption = (option) => {
//     return axios.post(`${baseUrl}/create`, { ...option });
// };

// optionService.updateOption = (option) => {
//     return axios.put(`${baseUrl}/update`, { ...option });
// };

export default optionService;
