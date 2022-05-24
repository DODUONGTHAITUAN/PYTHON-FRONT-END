import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

import CommonUtils from '../../../utils/CommonUtils';
import orderServive from '../../../services/orderServive';
import lineItemService from '../../../services/lineItemService';
import { removeFromCart } from '../../../store/actions/shoppingActions';

const CartSummary = (props) => {
    const { isLoggedIn, history, totalPrice, cartList, user, removeFromCart } =
        props;
    const [order, setOrder] = useState({});

    const [lineItems, setLineItems] = useState(() => {
        return (
            cartList?.map((item) => ({
                productID: item.id,
                quantity: item.quantity,
                price: item.currPrice,
            })) || []
        );
    });

    // Set list item when cart change
    useEffect(() => {
        const newLineItems = cartList.map((item) => ({
            productID: item.id,
            quantity: item.quantity,
            price: item.currPrice,
        }));
        setLineItems(newLineItems);
    }, [cartList]);

    // Set order when user login and totalPrice change
    useEffect(() => {
        setOrder({
            userID: user?.id || -1,
            statusID: 'STA1',
            address: user?.address || '',
            totalPrice,
        });
    }, [user, totalPrice]);

    const handleRedirectLogin = () => {
        if (!isLoggedIn) {
            history?.push('/login/me', '/cart');
        }
    };

    const handleSubmitOrder = async () => {
        try {
            const res = await orderServive.handleCreateNewOrder(order);
            console.log(res);
            if (res.data?.code === 0) {
                return res.data.order;
            }
            return {};
        } catch (e) {
            console.log(e);
            return {};
        }
    };

    const handleSubmitLineItems = async (orderID) => {
        try {
            const res = await lineItemService.handleCreateMultipleLineItem(
                lineItems.map((item) => ({ ...item, orderID }))
            );
            console.log(res);
            return res.data?.code;
        } catch (e) {
            return -1;
        }
    };

    const handleSubmitCart = async () => {
        const order = await handleSubmitOrder();
        if (!_.isEmpty(order)) {
            const resCode = await handleSubmitLineItems(order.id);
            if (resCode === 0) {
                cartList.forEach((item) => {
                    removeFromCart(item.id);
                });
                history?.push('/user/purchase', '/cart');
            }
        }
    };
    return (
        <Card className='card mb-4'>
            <CardHeader className='card-header py-3'>
                <strong className='mb-0'>Tổng đơn hàng</strong>
            </CardHeader>
            <CardBody>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                        Tạm tính:
                        <span>{CommonUtils.formatCurrency(totalPrice)}</span>
                    </ListGroupItem>
                    <ListGroupItem className='d-flex justify-content-between align-items-center px-0'>
                        Phí giao hàng:
                        <span>Miễn phí giao hàng</span>
                    </ListGroupItem>
                    <ListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                        <div>
                            <strong>Tổng cộng:</strong>
                            <strong>
                                <p className='mb-0'>(Bao gồm VAT)</p>
                            </strong>
                        </div>
                        <span>
                            <strong>
                                {CommonUtils.formatCurrency(totalPrice)}
                            </strong>
                        </span>
                    </ListGroupItem>
                </ListGroup>
                <Button
                    onClick={
                        !isLoggedIn ? handleRedirectLogin : handleSubmitCart
                    }
                    className='btn btn-primary btn-lg btn-block'
                    style={{
                        height: 40,
                        backgroundColor: 'rgb(255, 66, 78)',
                    }}
                >
                    Mua Hàng
                </Button>
            </CardBody>
        </Card>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn,
    totalPrice: state.shopping.totalPrice,
    cartList: state.shopping.cart,
    user: state.user.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CartSummary)
);
