import { useEffect, useState } from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import GuideList from '../../components/Client/Guide/GuideList';
import Specifications from '../../components/Client/Specifications/Specifications';
import ProductView from '../../components/Client/Product/ProductView';
import productService from '../../services/productService';
import detailProductService from '../../services/detaiProduct';

const DetailProduct = (props) => {
    const [productItem, setProductItem] = useState();
    const [detailProduct, setDetailProduct] = useState({});
    const { match } = props;

    console.log(detailProduct);

    const handleGetProductById = async (id) => {
        const res = await productService.handlegetProductById(id);
        if (res.data?.code === 0) {
            setProductItem(res.data.data);
        }
    };

    const handleGetDetailProduct = async (id) => {
        const res = await detailProductService.getData(id);
        if (res.data?.code === 0) {
            setDetailProduct(res.data.detail_product);
        }
    };

    useEffect(() => {
        // Fetch API
        const id = match?.params?.id || 1;
        handleGetProductById(id);
        handleGetDetailProduct(id);
    }, [match]);

    useEffect(() => {
        document.title = productItem ? productItem.product_name : 'Loading....';
    }, [productItem]);

    return (
        <div className='dp'>
            <Header />
            <main
                className='dp__content pt-5'
                style={{ backgroundColor: '#f8f9fa' }}
            >
                <div className='wrapper'>
                    <div className='dp__body'>
                        <div className='dp__body__row'>
                            <ProductView
                                productItem={productItem}
                                detailProduct={detailProduct}
                            />
                        </div>
                        <div className='dp__body__main'>
                            <Specifications
                                detailProduct={detailProduct}
                                productItem={productItem}
                            />
                        </div>
                        <GuideList />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DetailProduct;
