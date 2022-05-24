import { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from 'reactstrap';
import Select from 'react-select';

const styled = {
    marginBottom: '20px',
};

const fieldProduct = {
    productName: '',
    imageLink: '',
    cpu: '',
    gpu: '',
    origin: '',
    productDate: '',
    brandID: '',
};

const ProductModal = (props) => {
    // State
    const {
        toggleProductModal,
        setToggleProductModal,
        type,
        brands,
        handleCreateProduct,
    } = props;
    const [selectedBrand, setSelectedBrand] = useState(brands[0]);
    const [product, setProduct] = useState(() => ({
        ...fieldProduct,
        brandID: selectedBrand?.value || '',
    }));
    const { productName, imageLink, cpu, gpu, origin, productDate } = product;

    const handleClearFieldProduct = () => {
        setProduct({ ...fieldProduct, brandID: '' });
    };

    const handleSetProduct = (key, value) => {
        setProduct((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const verifyData = (data) => {
        return Object.keys(data).every((key) => data[key] !== '');
    };

    const handleSaveChangesData = async () => {
        if (verifyData(product)) {
            handleCreateProduct(product);
            handleClearFieldProduct();
        }
    };

    // Call API
    useEffect(() => {
        setSelectedBrand(brands[0]);
    }, [brands]);

    useEffect(() => {
        setProduct((prev) => ({
            ...prev,
            brandID: selectedBrand?.value || '',
        }));
    }, [selectedBrand]);
    return (
        <div className='pmo'>
            <Modal
                size='lg'
                className='pmo'
                isOpen={toggleProductModal}
                centered
                toggle={() => setToggleProductModal(!toggleProductModal)}
            >
                <ModalHeader
                    toggle={() => setToggleProductModal(!toggleProductModal)}
                >
                    {`${type[0].toUpperCase() + type.slice(1)} Product`}
                </ModalHeader>
                <ModalBody>
                    <div className='pmo__form'>
                        <Row style={styled}>
                            <Col>
                                <FormGroup>
                                    <Label for='product_name'>
                                        Product Name
                                    </Label>
                                    <Input
                                        value={productName}
                                        id='product_name'
                                        placeholder='SamSung....'
                                        onChange={(e) =>
                                            handleSetProduct(
                                                'productName',
                                                e.target.value
                                            )
                                        }
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for='image'>Image Link</Label>
                                    <Input
                                        id='image'
                                        value={imageLink}
                                        placeholder='Enter link image....'
                                        onChange={(e) =>
                                            handleSetProduct(
                                                'imageLink',
                                                e.target.value
                                            )
                                        }
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row style={styled}>
                            <Col sm='3'>
                                <FormGroup>
                                    <Label for='cpu'>CPU</Label>
                                    <Input
                                        id='cpu'
                                        placeholder='CPU...'
                                        value={cpu}
                                        onChange={(e) =>
                                            handleSetProduct(
                                                'cpu',
                                                e.target.value
                                            )
                                        }
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm='3'>
                                <FormGroup>
                                    <Label for='gpu'>GPU</Label>
                                    <Input
                                        value={gpu}
                                        id='gpu'
                                        placeholder='GPU....'
                                        onChange={(e) =>
                                            handleSetProduct(
                                                'gpu',
                                                e.target.value
                                            )
                                        }
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label>Brand</Label>
                                <Select
                                    options={brands}
                                    onChange={setSelectedBrand}
                                    value={selectedBrand}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for='origin'>Origin</Label>
                                    <Input
                                        id='origin'
                                        placeholder='Origin...'
                                        value={origin}
                                        onChange={(e) =>
                                            handleSetProduct(
                                                'origin',
                                                e.target.value
                                            )
                                        }
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for='product_date'>
                                        Product Date
                                    </Label>
                                    <Input
                                        id='product_date'
                                        placeholder='product date...'
                                        value={productDate}
                                        onChange={(e) =>
                                            handleSetProduct(
                                                'productDate',
                                                e.target.value
                                            )
                                        }
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={handleSaveChangesData}>
                        Save Changes
                    </Button>
                    <Button
                        color='primary'
                        onClick={() =>
                            setToggleProductModal(!toggleProductModal)
                        }
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ProductModal;
