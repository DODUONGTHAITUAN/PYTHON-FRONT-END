import { Card, CardBody, CardHeader } from 'reactstrap';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

const CartProgess = () => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const timerId = setTimeout(() => {
            if (width < 100) {
                setWidth(width + 1);
            }
        }, 60000);
        return () => clearTimeout(timerId);
    }, [width]);
    return (
        <Card className='card mb-4'>
            <CardHeader>
                <p>
                    <strong>Thời gian dự kiến giao hàng</strong>
                </p>
            </CardHeader>
            <CardBody className='card-body'>
                <MDBProgress>
                    <MDBProgressBar
                        striped
                        bgColor='primary'
                        width={width.toString()}
                        valuemin={0}
                        valuemax={100}
                    />
                </MDBProgress>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                    <p>Bắt đầu giao hàng: 12/10/2020 </p>
                    <p>Nhận hàng: 20/10/2020 </p>
                </div>
            </CardBody>
        </Card>
    );
};
export default CartProgess;
