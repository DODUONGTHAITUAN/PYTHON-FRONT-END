import { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Input, Row } from 'reactstrap';

import {
    removeFromCart,
    adjustQty,
} from '../../../store/actions/shoppingActions';
import CommonUtils from '../../../utils/CommonUtils';

const CartItem = (props) => {
    const { item, cartList, removeFromCart } = props;
    const [quantity, setQuantity] = useState(() => {
        const itemInCart = cartList.find((p) => p.id === item.id);
        return itemInCart.quantity;
    });

    const handleAdjustQty = (id, value) => {
        if (value > 0) {
            props.adjustQty(id, value);
            setQuantity(value);
        }
    };

    return (
        <Row>
            <Col className='col-lg-1 col-md-12 mb-4 mb-lg-0 align-items-center d-flex'>
                <Input type='checkbox' />
            </Col>
            <Col className='col-lg-3 col-md-12 mb-4 mb-lg-0'>
                {/* Image */}
                <div
                    className='bg-image hover-overlay hover-zoom ripple rounded'
                    data-mdb-ripple-color='light'
                >
                    <img
                        src={item?.image}
                        // src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp'
                        className='w-100'
                        alt=''
                    />
                    <span>
                        <div
                            className='mask'
                            style={{
                                backgroundColor: 'rgba(251, 251, 251, 0.2)',
                            }}
                        />
                    </span>
                </div>
                {/* Image */}
            </Col>
            <Col className='col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex flex-column justify-content-center'>
                <div className='mb-3'>
                    <h4 className='text-primary'>
                        {item && item.product_name}
                    </h4>
                    <h5 style={{ color: '#9e9e9e' }}>Color: Red</h5>
                </div>
                <div>
                    <Button
                        className='btn btn-primary btn-sm me-1 mb-2'
                        onClick={() => removeFromCart(item.id)}
                    >
                        <i className='fas fa-trash' />
                    </Button>
                    <Button className='btn btn-danger btn-sm mb-2'>
                        <i className='fas fa-heart' />
                    </Button>
                </div>
            </Col>
            <Col className='col-lg-4 col-md-6 mb-4 mb-lg-0  d-flex flex-column justify-content-center'>
                <div
                    className='d-flex mb-4 gap-4 align-items-baseline'
                    style={{ maxWidth: '300px' }}
                >
                    <Button
                        className='btn btn-primary px-3 me-2'
                        onClick={() => handleAdjustQty(item.id, quantity - 1)}
                    >
                        <i className='fas fa-minus' />
                    </Button>
                    <span className='form-outline'>{quantity}</span>

                    <Button
                        className='btn btn-primary px-3 ms-2'
                        onClick={() => handleAdjustQty(item.id, quantity + 1)}
                    >
                        <i className='fas fa-plus' />
                    </Button>
                </div>
                {/* Quantity */}
                {/* Price */}
                <p className='text-start text-md-start'>
                    <strong style={{ marginLeft: 45 }}>
                        {CommonUtils.formatCurrency(item?.currPrice)}
                    </strong>
                </p>
                {/* Price */}
            </Col>
        </Row>
    );
};

const mapStateToProps = (state) => ({
    cartList: state.shopping.cart,
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, quantity) => dispatch(adjustQty(id, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
