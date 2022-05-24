import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux';
import { ToastContainer } from 'react-toastify';

import {
    userIsAuthenticated,
    userIsNotAuthenticated,
} from '../hoc/authentication';

import { path } from '../utils';

import Client from '../routes/Client';
import Login from '../pages/Login';
import System from '../routes/System';

import { CustomToastCloseButton } from '../components/Customs/CustomToast';
import ConfirmModal from '../components/Customs/ConfirmModal';
import CustomScrollbars from '../components/Customs/CustomScrollbars';
import DetailProduct from '../pages/client/DetailProduct';
import Cart from '../pages/client/Cart';
import Account from '../pages/client/Account';
import MyPurchase from '../pages/client/MyPurchase';
import MyAccount from '../pages/client/MyAccount';

class App extends Component {
    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className='main-container'>
                        <ConfirmModal />
                        <div className='content-container'>
                            <CustomScrollbars style={{ height: '100vh' }}>
                                <Switch>
                                    <Route
                                        path={path.HOME}
                                        exact
                                        component={Client}
                                    />
                                    <Route
                                        path='/detail-product/:product_name/:id'
                                        component={DetailProduct}
                                    />
                                    <Route path='/cart' component={Cart} />
                                    <Route
                                        exact
                                        path={path.LOGIN}
                                        component={userIsNotAuthenticated(
                                            Login
                                        )}
                                    />
                                    <Route
                                        path={path.SYSTEM}
                                        component={userIsAuthenticated(System)}
                                    />
                                    <Route
                                        path='/login/me'
                                        component={Account}
                                    />
                                    <Route
                                        path={'/user/purchase'}
                                        component={MyPurchase}
                                    />
                                    <Route
                                        path={'/user/account'}
                                        component={MyAccount}
                                    />
                                </Switch>
                            </CustomScrollbars>
                        </div>
                        <ToastContainer
                            // className='toast-container'
                            toastClassName='toast-item'
                            bodyClassName='toast-item-body'
                            autoClose={false}
                            hideProgressBar={false}
                            pauseOnHover={false}
                            pauseOnFocusLoss={true}
                            closeOnClick={true}
                            draggable={false}
                        />
                    </div>
                </Router>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        started: state.app.started,
        isLoggedIn: state.admin.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
