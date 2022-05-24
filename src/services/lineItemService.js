import axios from '../axios';

const lineItemService = {};
const baseUrl = '/line-item';

lineItemService.handleCreateMultipleLineItem = (data) => {
    return axios.post(`${baseUrl}/create/multiple`, { data });
};

lineItemService.handleGetLineItemsByOrderId = (data) => {
    return axios.get(`${baseUrl}/get-line-items`, { params: { ...data } });
};

export default lineItemService;
