import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/System/Header/Header';
import UserManage from '../pages/system/UserManage';
import ProductManage from '../pages/system/ProductManage';
import DetailUser from '../pages/system/DetailUser';
import DetailProduct from '../pages/system/DetailProduct';
import OptionsProduct from '../pages/system/OptionsProduct';

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';

        //return <Redirect to={linkToRedirect} />;
        return (
            <>
                {isLoggedIn && <Header />}
                <div className='system-container'>
                    <div className='system-list'>
                        <Switch>
                            <Route
                                path='/system/user-manage'
                                component={UserManage}
                                exact
                            />
                            <Route
                                path={'/system/user-manage/profile/:type/:id'}
                                component={DetailUser}
                            />
                            <Route
                                path='/system/product-manage'
                                component={ProductManage}
                                exact
                            />
                            <Route
                                path='/system/product-manage/detail-product/:id'
                                component={DetailProduct}
                            />
                            <Route
                                path='/system/product-manage/update-options/:id'
                                component={OptionsProduct}
                            />
                            <Route
                                component={() => {
                                    return <Redirect to={systemMenuPath} />;
                                }}
                            />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.admin.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
