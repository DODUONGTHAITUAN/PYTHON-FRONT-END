import axios from '../axios';

const baseUrl = 'user';

const userService = {
    createNewUser: (data) => {
        return axios.post(`${baseUrl}/create`, { ...data });
    },
    getAllUsers: (data) => {
        return axios.get(`${baseUrl}/get-users`, { params: { ...data } });
    },
    deleteUser: (data) => {
        return axios.delete(`${baseUrl}/delete`, { params: { id: data } });
    },

    getUserByID: (id) => {
        return axios.get(`${baseUrl}/get-by-id`, { params: { id: id } });
    },
    updateUserById: (data) => {
        return axios.put(`${baseUrl}/update`, { ...data });
    },
    getUserByEmail: (data) => {
        return axios.post(`${baseUrl}/get-by-email`, { ...data });
    },
    handleVerifyEmail: (email) => {
        return axios.post(`${baseUrl}/verify-account`, { email });
    },
};

export default userService;
