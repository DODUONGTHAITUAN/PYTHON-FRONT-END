import { memo } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import logo from '../../assets/images/logo.png';
import MyAccount from './Account/AccountManage';

const nav = [
    {
        id: Math.random() * 100,
        title: 'Iphone',
        icon: 'fab fa-apple',
    },
    {
        id: Math.random() * 100,
        title: 'Samsung',
        icon: 'fab fa-android',
    },
    {
        id: Math.random() * 100,
        title: 'Xiaomi',
        icon: 'fab fa-linux',
    },
    {
        id: Math.random() * 100,
        title: 'Realme',
        icon: 'fas fa-adjust',
    },
    {
        id: Math.random() * 100,
        title: 'OPPO',
        icon: 'fab fa-audible',
    },
    {
        id: Math.random() * 100,
        title: 'Vivo',
        icon: 'fab fa-windows',
    },
    {
        id: Math.random() * 100,
        title: 'vsmart',
        icon: 'fab fa-accusoft',
    },
];

const Header = (props) => {
    const { isLoggedIn, totalProducts } = props;
    const history = useHistory();
    return (
        <div className='header__container'>
            <header className='wrapper header'>
                <div className='header__top'>
                    <div className='header__top__logo'>
                        <img
                            src={logo}
                            alt='logo'
                            onClick={() => history.push('/')}
                        />
                    </div>
                    <div className='header__top__group'>
                        <input
                            className='header__top__group__search'
                            placeholder='Tìm điện thoại...'
                        />
                        <button className='header__top__group__btn'>
                            <i className='fas fa-search'></i>
                            <span>Tìm kiếm</span>
                        </button>
                    </div>
                    <div className='header__top__acc'>
                        {isLoggedIn ? (
                            <MyAccount />
                        ) : (
                            <>
                                <i className='far fa-user'></i>
                                <span onClick={() => history.push('/login/me')}>
                                    Đăng nhập
                                </span>
                            </>
                        )}
                    </div>
                    <div
                        className='header__top__cart'
                        onClick={() => history.push('/cart')}
                    >
                        <i className='fas fa-shopping-cart'></i>
                        <span>Giỏ hàng</span>
                        <span className='header__top__cart__count'>
                            {totalProducts || 0}
                        </span>
                    </div>
                </div>
                <div className='header__bottom'>
                    <div className='header__bottom__menu'>
                        {nav.map((item) => {
                            return (
                                <div
                                    className='header__bottom__menu__item'
                                    key={item.id}
                                >
                                    <i className={item.icon}></i>
                                    <span>{item.title}</span>
                                </div>
                            );
                        })}
                        <div className='header__bottom__menu__item'>
                            <i className='fab fa-accusoft'></i>
                            <span>vsmart</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn,
    totalProducts: state.shopping.totalProducts,
});

export default connect(mapStateToProps, null)(memo(Header));
