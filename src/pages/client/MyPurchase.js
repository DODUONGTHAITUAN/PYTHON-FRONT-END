import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PurchaseList from '../../components/Client/Account/PurchaseList';
import Footer from '../../components/Client/Footer';
import Header from '../../components/Client/Header';
import EmptyCart from '../../components/Client/Cart/EmptyCart';
import orderServive from '../../services/orderServive';

const EmptyPurchase = () => {
    const message = 'Không có đơn hàng nào';
    return <EmptyCart message={message} />;
};

const MyPurchase = (props) => {
    const { userInfo } = props;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        document.title = 'Đơn hàng của tôi | Tiki.vn';
    }, []);

    useEffect(() => {
        const handleGetOrderByUserId = async () => {
            if (userInfo?.id) {
                const res = await orderServive.handleGetOrderByUserId(
                    userInfo.id
                );
                if (res.data?.code === 0) {
                    setOrders(res.data.orders);
                }
            }
        };
        handleGetOrderByUserId();
    }, [userInfo]);

    console.log(orders);
    return (
        <div className='mp'>
            <Header />
            <div className='mp__main' style={{ backgroundColor: '#f5f5fa' }}>
                <div className='wrapper'>
                    <h4
                        className='pt-5 fw-light'
                        style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                    >
                        Đơn hàng của tôi
                    </h4>
                    {orders?.length > 0 ? (
                        orders.map((item, i) => (
                            <PurchaseList
                                lineItems={item.line_items}
                                key={item.id}
                            />
                        ))
                    ) : (
                        <EmptyPurchase />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    userInfo: state.user.userInfo,
});

export default connect(mapStateToProps, null)(MyPurchase);
