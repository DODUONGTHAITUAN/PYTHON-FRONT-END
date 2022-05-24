import { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router';

import LoginForm from '../../components/Client/Account/LoginForm';
import Register from '../../components/Client/Account/Register';
import Footer from '../../components/Client/Footer';
import { account } from '../../utils/constant';
import logo from '../../assets/images/logo.png';

const Account = (props) => {
    const [tab, setTab] = useState(account.LOGIN);

    const { history } = props;

    useEffect(() => {
        const title =
            tab === account.LOGIN
                ? 'Đăng nhập tài khoản  - Mua sắm Online | tiki.vn'
                : 'Đăng ký ngay | tiki.vn';
        document.title = title;
    }, [tab]);

    return (
        <div className='account'>
            <main className='mb-5'>
                {/* Header Account */}
                <div className='outer' style={{ backgroundColor: '#1a94ff' }}>
                    <div className='wrapper'>
                        <Row className='py-4'>
                            <Col
                                className='col-6'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'end',
                                }}
                            >
                                <img
                                    style={{ cursor: 'pointer' }}
                                    src={logo}
                                    alt=''
                                    width={70}
                                    onClick={() => history?.push('/')}
                                />
                                <span
                                    style={{
                                        color: '#fff',
                                        fontSize: 20,
                                        marginLeft: 10,
                                    }}
                                    className='fw-normal d-inline-block'
                                >
                                    {tab === account.LOGIN
                                        ? 'Login'
                                        : 'Register'}
                                </span>
                            </Col>
                            <Col
                                className='col-6'
                                style={{
                                    color: '#fff',
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'end',
                                }}
                            >
                                Bạn cần giúp đỡ?
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='wrapper'>
                    {/* Form Login or Sign Up */}
                    <main className='pt-4'>
                        <div className='wrapper'>
                            <Row>
                                <Col className='col-6'>
                                    <img
                                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
                                        className='img-fluid'
                                        alt=''
                                    />
                                </Col>
                                <Col className='col-6'>
                                    <ul className='nav nav-pills nav-justified mb-3'>
                                        <li
                                            style={{ cursor: 'pointer' }}
                                            className='nav-item'
                                            onClick={() =>
                                                setTab(account.LOGIN)
                                            }
                                        >
                                            <span
                                                className={`nav-link ${
                                                    tab === account.LOGIN
                                                        ? 'active'
                                                        : ''
                                                }`}
                                            >
                                                Login
                                            </span>
                                        </li>
                                        <li
                                            style={{ cursor: 'pointer' }}
                                            className='nav-item'
                                            onClick={() =>
                                                setTab(account.REGISTER)
                                            }
                                        >
                                            <span
                                                className={`nav-link ${
                                                    tab === account.REGISTER
                                                        ? 'active'
                                                        : ''
                                                }`}
                                            >
                                                Register
                                            </span>
                                        </li>
                                    </ul>
                                    <div className='tab-content'>
                                        <LoginForm
                                            active={tab}
                                            setTab={setTab}
                                        />
                                        <Register
                                            active={tab}
                                            setTab={setTab}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </main>
                </div>
            </main>
            {/* Footer Account */}
            <Footer />
        </div>
    );
};

export default withRouter(Account);
