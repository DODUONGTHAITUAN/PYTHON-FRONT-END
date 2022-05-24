import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Row,
} from 'reactstrap';

import CommonUtils from '../../../utils/CommonUtils';

const styleBtn = {
    height: 35,
    padding: '0 15px',
    backgroundColor: '#fff',
    color: '#2f88e9',
    border: '1px solid #2f88e9',
    boxShadow: 'none',
};

const PurchaseItem = (props) => {
    const [product, setProduct] = useState({});
    const { item, products } = props;

    useEffect(() => {
        const p = products?.find((pr) => pr.id === item.productID) || {};
        setProduct(p);
    }, [item, products]);

    return (
        <Card className='mb-4'>
            <CardHeader style={{ backgroundColor: '#fff', minHeight: 80 }}>
                <div
                    className='d-flex align-items-center gap-2 mb-2'
                    style={{ color: '#909098' }}
                >
                    <i className='fas fa-ambulance'></i>
                    <span className='fw-bold'>Giao vào Thứ năm, 28/04</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <i className='fas fa-bell' style={{ color: '#2dc26d' }}></i>
                    <span>
                        <span className='mx-1 d-inline-block fw-bold'>
                            Đang xử lý
                        </span>
                        <span
                            className='fw-lighter'
                            style={{ color: '#95959d' }}
                        >
                            Sẵn sàng lấy hàng | 23:22, Chủ Nhật 24/04/2022
                        </span>
                    </span>
                </div>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className='col-10'>
                        <div className='d-flex gap-3'>
                            <div className='position-relative'>
                                <img
                                    height={100}
                                    // src='https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/26/637393169370871358_ip-11-dd.png'
                                    src={product?.option?.image}
                                    alt=''
                                />
                                <span
                                    className='position-absolute bottom-0 end-0 p-1'
                                    style={{
                                        transform: 'translateX(-4px)',
                                        backgroundColor: '#eee',
                                        color: '#a99ba1',
                                        borderTopLeftRadius: '5px',
                                    }}
                                >
                                    x{item?.quantity || '10'}
                                </span>
                            </div>
                            <div className='d-flex flex-column'>
                                <span style={{ fontSize: 13 }} className='mb-2'>
                                    {product?.product_name}
                                </span>
                                <span
                                    className='d-flex align-items-center gap-2'
                                    style={{
                                        color: '#9a9aa2',
                                        fontWeight: 600,
                                    }}
                                >
                                    <i className='fas fa-store-alt'></i>
                                    <span style={{ fontSize: 13 }}>
                                        Future Store
                                    </span>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-2 d-flex justify-content-end'>
                        <span style={{ fontSize: 14 }}>
                            {CommonUtils.formatCurrency(
                                item?.price / item?.quantity
                            )}
                        </span>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter style={{ backgroundColor: '#fff' }}>
                <Row>
                    <Col className='col-12'>
                        <div className='d-flex justify-content-end'>
                            <p style={{ fontSize: 17 }}>
                                <span
                                    style={{ marginRight: 5, color: '#9a9aa2' }}
                                >
                                    Tổng tiền:
                                </span>
                                <span>
                                    {CommonUtils.formatCurrency(item?.price)}
                                </span>
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className='mb-2'>
                    <Col className='d-flex justify-content-end gap-3 algin-items-center'>
                        <Button style={styleBtn}>Mua lại</Button>
                        <Button style={styleBtn}>Xem chi tiết</Button>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shopping.products,
    };
};

export default connect(mapStateToProps, null)(PurchaseItem);
