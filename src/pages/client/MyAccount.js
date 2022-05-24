import { MDBInput } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Card, CardBody, CardHeader, Row } from 'reactstrap';
import Footer from '../../components/Client/Footer';
import Header from '../../components/Client/Header';

const inputs = [
    {
        id: 1,
        label: 'Name',
        key: 'fullName',
        placeholder: 'Đỗ Dương Thái Tuấn',
    },
    {
        id: 2,
        label: 'Email',
        key: 'email',
        type: 'email',
        disable: true,
    },
    {
        id: 3,
        label: 'Phonenumber',
        key: 'phonenumber',
        placeholder: '0987654321',
    },
    {
        id: 4,
        label: 'Address',
        key: 'address',
        placeholder: '20 Hai Bà Trưng, Hà Nội',
    },
];

const MyAccount = (props) => {
    const [info, setInfo] = useState(() => {
        return {
            fullName: '',
            phonenumber: '',
            address: '',
        };
    });
    const { user } = props;
    console.log(user);

    useEffect(() => {
        setInfo((prev) => ({
            ...prev,
            fullName: user?.fullName || '',
            id: user?.id || '1',
            phonenumber: user?.phonenumber || '',
            address: user?.address || '',
        }));
    }, [user]);

    useEffect(() => {
        document.title = 'Tài khoản của tôi | Tiki.vn';
    }, []);
    return (
        <div className='am'>
            <Header />
            <div style={{ backgroundColor: '#f5f5fa' }} className='py-5'>
                <div className='wrapper'>
                    <Card>
                        <CardHeader
                            style={{
                                backgroundColor: '#fff',
                            }}
                        >
                            <div className='d-flex justify-content-between flex-column'>
                                <div
                                    className='fw-bold mb-2'
                                    style={{ fontSize: 20 }}
                                >
                                    My profile
                                </div>
                                <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                    Manage and protect your account
                                </span>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div style={{ padding: '0 120px' }}>
                                <Row>
                                    <Col
                                        className='col-8'
                                        style={{
                                            borderRight: '1px solid #ddd',
                                        }}
                                    >
                                        {inputs.map((item) => (
                                            <MDBInput
                                                key={item.id}
                                                onChange={(e) =>
                                                    console.log(e.target.value)
                                                }
                                                value={info[item.key]}
                                                placeholder={
                                                    item.placeholder || ''
                                                }
                                                label={item.label}
                                                className='py-2 mb-4'
                                                type={item.type || 'text'}
                                                disabled={item.disable || false}
                                            />
                                        ))}
                                    </Col>
                                    <Col className='col-4 d-flex justify-content-center'>
                                        <div className='d-flex flex-column justify-content-between align-items-center'>
                                            <img
                                                width={100}
                                                src='https://cf.shopee.vn/file/1f1d29859a64e0870709050a89089c6c_tn'
                                                alt=''
                                                className='rounded-circle'
                                            />
                                            <Button
                                                className='px-4'
                                                style={{
                                                    height: 30,
                                                    backgroundColor: '#0b74e5',
                                                }}
                                            >
                                                Select image
                                            </Button>
                                            <span>File size: maximum 1 MB</span>
                                            <span>
                                                File extension: .JPEG, .PNG
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Button
                                    className='px-3'
                                    style={{
                                        height: 35,
                                        backgroundColor: '#0b74e5',
                                    }}
                                >
                                    Save
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.userInfo,
    isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps, null)(MyAccount);
