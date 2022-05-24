import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SideBar from './Sidebar/SideBar';
import ProductList from './Product/ProductList';
import CommonUtils from '../../utils/CommonUtils';
import { loadCurrentItem } from '../../store/actions/shoppingActions';

const features = [
    {
        id: Math.random() * 100,
        title: 'Bán chạy nhất',
    },
    {
        id: Math.random() * 100,
        title: 'Trả góp 0%',
    },
    {
        id: Math.random() * 100,
        title: 'Giá thấp',
    },
    {
        id: Math.random() * 100,
        title: 'Giá cao',
    },
    {
        id: Math.random() * 100,
        title: 'Ưu đãi online',
    },
];

const AllProduct = (props) => {
    const { loadCurrentItem } = props;
    const [isGridLayout, setGridlayout] = useState(1);
    const [feature, setFeature] = useState(features[0].id);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const handleGetProducts = async (page, per_page) => {
        const data = await CommonUtils.handleGetProductsPagination(
            page,
            per_page
        );
        loadCurrentItem(data);
        // Store in redux
        setProducts((prev) => {
            return [...prev, ...data];
        });
    };

    const handleGetMoreProducts = (value) => {
        if (value < 5) {
            handleGetProducts(value, 9);
        }
        setPage(value);
    };

    useEffect(() => {
        handleGetProducts(1, 9);
    }, []);

    return (
        <div className='ap'>
            <div className='wrapper'>
                <div className='row align-items-start' style={{ margin: 0 }}>
                    <div className='col-3 ap__left'>
                        <SideBar />
                    </div>
                    <div
                        className='col-9 ap__right'
                        style={{ backgroundColor: '#fff' }}
                    >
                        <div className='ap__right__top'>
                            <div className='ap__right__top__left'>
                                <span className='ap__right__top__left__label'>
                                    Ưu tiên xem:
                                </span>
                                <div className='ap__right__top__left__features'>
                                    {features.map((fea) => (
                                        <span
                                            onClick={() => setFeature(fea.id)}
                                            className={`ap__right__top__left__features__item ${
                                                feature === fea.id && 'active'
                                            }`}
                                            key={fea.id}
                                        >
                                            {fea.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='ap__right__top__right'>
                                <i
                                    className={`fas fa-th-large ${
                                        isGridLayout === 1 && 'active'
                                    }`}
                                    onClick={() => setGridlayout(1)}
                                ></i>
                                <i
                                    className={`fas fa-bars ${
                                        isGridLayout === 2 && 'active'
                                    }`}
                                    onClick={() => setGridlayout(2)}
                                ></i>
                            </div>
                        </div>
                        <ProductList
                            products={products}
                            isGridLayout={isGridLayout}
                        />
                        <div
                            hidden={page > 3}
                            className='ap__right__btn'
                            onClick={() => handleGetMoreProducts(page + 1)}
                        >
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
});

export default connect(null, mapDispatchToProps)(AllProduct);
