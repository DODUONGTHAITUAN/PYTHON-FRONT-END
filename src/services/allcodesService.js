import axios from '../axios';

const allcodeService = {};

allcodeService.getAllcodeByType = (type) => {
    return axios.get('/allcodes/get-by-type', {
        params: { type },
    });
};

export default allcodeService;
