import { Col, Row } from 'reactstrap';

import Footer from '../../components/Client/Footer';
import Header from '../../components/Client/Header';
import CartList from '../../components/Client/Cart/CartList';
import EmptyCart from '../../components/Client/Cart/EmptyCart';
import CartSummary from '../../components/Client/Cart/CartSummary';
import CartProgess from '../../components/Client/Cart/CartProgess';
import CartPay from '../../components/Client/Cart/CartPay';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const Cart = (props) => {
    const { totalProducts } = props;
    const [countItemInCart, setCountItemInCart] = useState(totalProducts);

    useEffect(() => {
        setCountItemInCart(totalProducts);
    }, [totalProducts]);

    useEffect(() => {
        document.title = 'Giỏ hàng | Tiki.vn';
    }, []);
    return (
        <div className='cart'>
            <Header />
            {countItemInCart > 0 ? (
                <section
                    className='h-100 gradient-custom'
                    style={{ backgroundColor: '#f5f5fa' }}
                >
                    <div className='wrapper'>
                        <div className='container py-5'>
                            <Row className='d-flex justify-content-center my-4'>
                                <Col className='col-md-8'>
                                    <CartList />
                                    {/* Cart progess */}
                                    <CartProgess />
                                    {/* Cart progess */}
                                    {/* Card pay method */}
                                    <CartPay />
                                    {/* Card pay method */}
                                </Col>
                                <Col className='col-md-4'>
                                    <CartSummary />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
            ) : (
                <EmptyCart />
            )}

            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    totalProducts: state.shopping.totalProducts,
});

export default connect(mapStateToProps, null)(Cart);
