import { useEffect, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Row } from 'reactstrap';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';

import OptionList from '../../components/System/Option/OptionList';
import OptionModal from '../../components/System/Option/OptionModal';
import optionService from '../../services/optionService';

const option_data = {
    id: '',
    ram: '',
    rom: '',
    price: '',
    image: '',
    colorID: '',
    color_value: '',
};

const OptionsProduct = (props) => {
    const [toggleModal, setToggleModal] = useState(false);
    const [options, setOptions] = useState([]);
    const { history, match } = props;
    const [option, setOption] = useState(() => ({
        ...option_data,
        productID: match?.params?.id || 1,
    }));

    const handleRedirectProductManage = () => {
        history?.push && history.push('/system/product-manage');
    };

    const handleGetOptionsByProductId = async (id) => {
        const res = await optionService.getOptionsByProductId(id);
        if (res.data?.code === 0) {
            setOptions(res.data?.options);
        }
    };

    const handleClearDataAfterOnClose = (setState) => {
        setState((prev) => {
            return {
                ...prev,
                ...option_data,
            };
        });
        setToggleModal(!toggleModal);
    };

    const handleSubmitOption = async () => {
        // console.log(option);
        const res = await optionService.createOrUpdateOption(option);
        console.log(res);
        if (res.data?.code === 0) {
            handleClearDataAfterOnClose(setOption);
            handleGetOptionsByProductId(option.productID);
            toast.success('Option has save changed!!!');
        } else {
            toast.error('Save option failure!!!');
        }
    };

    const handleDeleteOption = async (optionId) => {
        if (optionId) {
            const res = await optionService.deleteOptionByid(optionId);
            if (res.data?.code === 0) {
                handleGetOptionsByProductId(option.productID);
                toast.success('Delete option success!!!');
            } else {
                toast.error('Delete option failure');
            }
        }
    };

    useEffect(() => {
        const id = match?.params?.id || 1;
        handleGetOptionsByProductId(id);
    }, [match]);

    return (
        <div className='op mt-4'>
            <div className='op__container container'>
                <Row>
                    <h2 className='text-center fw-bold text-uppercase'>
                        Option Product
                    </h2>
                </Row>
                <div className='op__add-new mb-3'>
                    <MDBBtn
                        onClick={() => setToggleModal(!toggleModal)}
                        style={{ padding: '0px 20px', marginLeft: 'auto' }}
                        className='d-flex align-items-center gap-2 '
                    >
                        <i className='fas fa-plus'></i>
                        <span>Create Option</span>
                    </MDBBtn>
                </div>
                <div className='op__table'>
                    <OptionList
                        handleDeleteOption={handleDeleteOption}
                        options={options}
                        setToggleModal={setToggleModal}
                        setOption={setOption}
                    />
                </div>
                <div className='op__back'>
                    <MDBBtn
                        onClick={handleRedirectProductManage}
                        style={{ padding: '0px 20px' }}
                        className='d-flex align-items-center gap-2'
                    >
                        <i className='fas fa-arrow-left'></i>
                        <span>Back Product Manage</span>
                    </MDBBtn>
                </div>
                <OptionModal
                    handleSubmitOption={handleSubmitOption}
                    handleClearDataAfterOnClose={handleClearDataAfterOnClose}
                    setOption={setOption}
                    option={option}
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                    productID={match?.params?.id ? match.params.id : -1}
                />
            </div>
        </div>
    );
};

export default withRouter(OptionsProduct);
