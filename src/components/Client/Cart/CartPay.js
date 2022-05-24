import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    Input,
    Label,
    Row,
} from 'reactstrap';

const checkboxs = [
    {
        id: 1,
        label: 'Credit Card',
        icon: 'fa-cc-mastercard',
    },
    {
        id: 2,
        label: 'Debit Card',
        icon: 'fa-cc-visa',
    },
    {
        id: 3,
        label: 'Paypal',
        icon: 'fa-cc-paypal',
    },
];

const inputs = [
    {
        id: 1,
        for: 'typeText',
        placeholder: 'John Smith',
        label: 'Name on Card',
    },
    {
        id: 2,
        for: 'typeText',
        placeholder: 'MM/YY',
        label: 'Expiration',
    },
    {
        id: 3,
        for: 'typeText',
        placeholder: '1111 2222 3333 4444',
        label: 'Card Number',
    },
    {
        id: 4,
        for: 'typeText',
        placeholder: '●●●',
        label: 'Cvv',
    },
];

const CartPay = () => {
    return (
        <Card
            className='card shadow-2-strong mb-5 mb-lg-0'
            style={{ borderRadius: '5px' }}
        >
            <CardHeader>
                <p>
                    <strong>Các hình thức thanh toán được chấp nhận</strong>
                </p>
            </CardHeader>
            <CardBody className=' p-4'>
                <Row>
                    <Col className='col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0'>
                        <Form>
                            {checkboxs.map((item) => (
                                <div
                                    className='d-flex flex-row pb-2'
                                    key={item.id}
                                >
                                    <div className='d-flex align-items-center pe-2'>
                                        <Input
                                            className='form-check-input'
                                            type='radio'
                                        />
                                    </div>
                                    <div className='rounded border w-100 p-2'>
                                        <p className='d-flex align-items-center mb-0'>
                                            <i
                                                className={`fab ${item.icon} fa-2x text-dark pe-2`}
                                            />
                                            {item.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Form>
                    </Col>
                    <Col className='col-md-6 col-lg-4 col-xl-6'>
                        <Row>
                            {inputs.map((item) => (
                                <Col className='col-6' key={item.id}>
                                    <div className='form-outline mb-4 mb-xl-5'>
                                        <Input
                                            id={item.for}
                                            className='form-control form-control-lg'
                                            placeholder={item.placeholder}
                                        />
                                        <Label
                                            className='form-label'
                                            htmlFor={item.for}
                                        >
                                            {item.label}
                                        </Label>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col className='col-lg-4 col-xl-3'>
                        <div
                            className='d-flex justify-content-between'
                            style={{ fontWeight: 500 }}
                        >
                            <p className='mb-2'>Tiềm đơn hàng:</p>
                            <p className='mb-2'>$23.49</p>
                        </div>
                        <div
                            className='d-flex justify-content-between'
                            style={{ fontWeight: 500 }}
                        >
                            <p className='mb-0'>Phí giao hàng:</p>
                            <p className='mb-0'>$2.99</p>
                        </div>
                        <hr className='my-4' />
                        <div
                            className='d-flex justify-content-between mb-4'
                            style={{ fontWeight: 500 }}
                        >
                            <p className='mb-2'>Tổng (VAT):</p>
                            <p className='mb-2'>$26.48</p>
                        </div>
                        <button className='btn btn-primary  btn-lg text-center px-4'>
                            <div className='d-flex justify-content-between'>
                                <span>Thanh Toán</span>
                            </div>
                        </button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default CartPay;
