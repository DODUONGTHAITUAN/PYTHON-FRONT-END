import { FormGroup, Label, Input, Col } from 'reactstrap';

const DetailProductInput = (props) => {
    const { item, handleSetDetail, detail } = props;
    return (
        <Col className={item.className}>
            <FormGroup>
                <Label for={item.key}>{item.label}</Label>
                <Input
                    value={detail[item.key]}
                    id={item.key}
                    placeholder={item.placeholder}
                    onChange={(e) => handleSetDetail(item.key, e.target.value)}
                />
            </FormGroup>
        </Col>
    );
};

export default DetailProductInput;
