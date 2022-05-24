import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { processLogout } from '../../../store/actions/userActions';

const AccountManage = (props) => {
    const { processLogout, userInfo, history } = props;
    const handleLogoutAccount = () => {
        processLogout();
    };

    const handleRedirectOrder = () => {
        history?.push('/user/purchase');
    };

    const handleRedirectMyAccount = () => {
        history?.push('/user/account');
    };

    return (
        <ul className='navbar-nav '>
            <li className='nav-item profile'>
                <span className='nav-link  d-flex align-items-center flex-column'>
                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp'
                        className='rounded-circle'
                        height={30}
                        alt='Avatar'
                    />
                    <span style={{ color: '#fff' }}>
                        {userInfo?.fullName || 'Tài khoản'}
                    </span>
                </span>
                <ul className='profile__menu'>
                    <li
                        className='profile__menu__item'
                        onClick={handleRedirectOrder}
                    >
                        Đơn hàng của tôi
                    </li>
                    <li
                        className='profile__menu__item'
                        onClick={handleRedirectMyAccount}
                    >
                        Chỉnh sửa thông tin
                    </li>
                    <li
                        className='profile__menu__item'
                        onClick={handleLogoutAccount}
                    >
                        Đăng xuất
                    </li>
                </ul>
            </li>
        </ul>
    );
};

const mapStateToProps = (state) => ({
    userInfo: state.user.userInfo,
    isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    processLogout: () => dispatch(processLogout()),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AccountManage)
);
