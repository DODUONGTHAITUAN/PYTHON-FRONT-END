import { useState } from 'react';
import {
    MDBCollapse,
    MDBBtn,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import { Col, Label, Row } from 'reactstrap';

const GuideItem = (props) => {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);

    return (
        <MDBCard style={{ backgroundColor: showShow ? '#eee' : '' }}>
            <MDBCardBody onClick={toggleShow}>
                <Row>
                    <Col className='col-6 d-flex align-items-center gap-2 pb-2'>
                        <i className='far fa-question-circle'></i>
                        <span>Được tham gia "Thuê máy" bao nhiêu kỳ hạn?</span>
                    </Col>
                    <Col className='col-6 text-end'>
                        <i
                            className={`fas fa-chevron-${
                                !showShow ? 'up' : 'down'
                            }`}
                        ></i>
                    </Col>
                </Row>
                <MDBCollapse show={showShow} className='fw-normal'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                </MDBCollapse>
            </MDBCardBody>
        </MDBCard>
    );
};

export default GuideItem;
