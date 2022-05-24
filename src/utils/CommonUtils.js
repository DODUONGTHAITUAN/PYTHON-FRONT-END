import productService from '../services/productService';

class CommonUtils {
    static isNumber1(number) {
        if (number === 1) return true;
        return false;
    }
    static formatAllcodesToSelectOption(allcodes) {
        const options = allcodes.map((item) => ({
            label: item.value,
            value: item.keyMap,
        }));
        return options;
    }

    static validateOption(option) {
        if (
            !option.productID ||
            !option.ram ||
            !option.rom ||
            !option.price ||
            !option.image ||
            !option.colorID
        ) {
            return false;
        }
        return true;
    }

    static async handleGetProductsPagination(page, per_page) {
        const data = { page, per_page };
        const res = await productService.handleGetProductsPagination(data);
        if (res.data?.code === 0) {
            return res.data.data.products;
        }
        return [];
    }

    static handleValidateInfoUser(user) {
        if (
            user.fullName &&
            user.email &&
            user.password &&
            user.confirmPassword &&
            user.phonenumber &&
            user.address
        ) {
            if (user.password === user.confirmPassword) {
                return {
                    errMess: 'success',
                    code: 0,
                };
            } else {
                return {
                    errMess: 'Confirm password invalid!',
                    code: 1,
                };
            }
        } else {
            return {
                code: 2,
                errMess: 'Missing field requied',
            };
        }
    }

    // Convert string to number
    static toNumber(s) {
        return Number(s.split('.').join(''));
    }

    static formatCurrency(num = 4999999) {
        // return num.toLocaleString('it-IT', {
        //     style: 'currency',
        //     currency: 'VND',
        // });
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(num);
    }

    static increaseCurrency(numString) {
        const max = 5000000;
        const min = 1000000;
        const num =
            this.toNumber(numString) +
            Math.floor(Math.random() * (max - min) + min);
        return this.formatCurrency(num);
    }
}

export default CommonUtils;
