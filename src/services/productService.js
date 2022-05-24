import axios from '../axios';

const productService = {};
const baseUrl = '/product';

productService.handleGetProductsPagination = (data) => {
    return axios.get(`${baseUrl}/get-products`, {
        params: { page: data.page, per_page: data.per_page },
    });
};

productService.handlegetProductById = (id) => {
    return axios.get(`${baseUrl}/get-product-by-id`, {
        params: { id },
    });
};

productService.handleCreateProduct = (data) => {
    return axios.post(`${baseUrl}/create`, { ...data });
};

productService.handleDeleteProduct = (id) => {
    return axios.delete(`${baseUrl}/delete`, { params: { id } });
};

export default productService;
