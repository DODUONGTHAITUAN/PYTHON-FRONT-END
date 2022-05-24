import { useHistory } from 'react-router';

import emptyCart from '../../../assets/cart/empty-cart.png';

const EmptyCart = (props) => {
    const { message } = props;
    const history = useHistory();
    return (
        <div className='np'>
            <div className='np__content'>
                <img src={emptyCart} alt='empty-cart' />
                <span className='np__heading'>
                    {message || 'Không có sản phẩm nào trong giỏ hàng'}
                </span>
                <button className='np__btn' onClick={() => history.push('/')}>
                    Về trang chủ
                </button>
            </div>
        </div>
    );
};

export default EmptyCart;
