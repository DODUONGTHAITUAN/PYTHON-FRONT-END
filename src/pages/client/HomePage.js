import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import PromotionPhone from '../../components/Client/Section/PromotionPhone';
import AllProduct from '../../components/Client/AllProduct';
import SliderList from '../../components/Client/Slider/SliderList';
import FeaturePhone from '../../components/Client/Section/FeaturePhone';
import { useEffect } from 'react';

const HomePage = (props) => {
    useEffect(() => {
        document.title =
            'Tiki - Mua hàng online giá tốt, hàng chuẩn, ship nhanh';
    }, []);
    return (
        <div className='home'>
            <Header />
            <main
                className='home__content'
                style={{ backgroundColor: '#f8f9fa' }}
            >
                <div className='wrapper pt-5'>
                    <SliderList />
                </div>
                <PromotionPhone />
                <div className='wrapper pt-5'>
                    <SliderList />
                </div>
                <FeaturePhone />
                <div className='wrapper py-5'>
                    <SliderList />
                </div>
                <AllProduct />
            </main>
            <Footer />
        </div>
    );
};

export default withRouter(connect(null, null)(HomePage));
