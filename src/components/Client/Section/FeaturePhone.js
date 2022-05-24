import { useState, useEffect } from 'react';

import CommonUtils from '../../../utils/CommonUtils';
import ProductItem from '../Product/ProductItem';

const FeaturePhone = () => {
    const [products, setProducts] = useState([]);

    const handleGetProducts = async (page, per_page) => {
        const data = await CommonUtils.handleGetProductsPagination(
            page,
            per_page
        );
        setProducts(data);
    };

    useEffect(() => {
        handleGetProducts(2, 4);
    }, []);

    return (
        <div className='pp'>
            <div
                className='wrapper  pb-3 px-2'
                style={{ backgroundColor: '#fff' }}
            >
                <div className='pp__top'>
                    <span>Điện Thoại Nổi Bật</span>
                    <span>Xem tất cả</span>
                </div>
                <div className='pp__products'>
                    {products?.length > 0 &&
                        products.map((item) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturePhone;
