import { connect } from 'react-redux';
import { Card, CardBody, CardHeader } from 'reactstrap';

import CartItem from './CartItem';

const CartList = (props) => {
    const { cartList, totalProducts } = props;

    return (
        <Card className='mb-4'>
            <CardHeader className='py-3'>
                <h5 className='mb-0 fw-bold'>
                    Có {totalProducts || 0} sản phẩm trong giỏ hàng
                </h5>
            </CardHeader>
            <CardBody className='card-body'>
                {cartList.length > 0 &&
                    cartList.map((item) => (
                        <div key={item.id}>
                            <CartItem item={item} />
                            <hr className='my-4' />
                        </div>
                    ))}
            </CardBody>
        </Card>
    );
};

const mapStateToProps = (state) => ({
    cartList: state.shopping.cart,
    totalProducts: state.shopping.totalProducts,
});

export default connect(mapStateToProps, null)(CartList);
