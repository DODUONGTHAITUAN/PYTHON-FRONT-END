import axios from '../axios';

const orderServive = {};

orderServive.handleCreateNewOrder = (data) => {
    return axios.post('/order/create', { ...data });
};

orderServive.handleGetOrderByUserId = (data) => {
    return axios.get('/order/get-orders-by-user-id', {
        params: { userID: data },
    });
};

export default orderServive;
