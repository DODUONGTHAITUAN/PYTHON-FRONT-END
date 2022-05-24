import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

import OptionForm from './OptionForm';

const OptionModal = (props) => {
    const {
        toggleModal,
        setToggleModal,
        option,
        setOption,
        handleClearDataAfterOnClose,
        handleSubmitOption,
    } = props;

    return (
        <MDBModal
            show={toggleModal}
            // onClick={() => handleClearDataAfterOnClose(setOption)}
        >
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>New Option</MDBModalTitle>
                        <MDBBtn
                            className='btn-close'
                            color='none'
                            onClick={() =>
                                handleClearDataAfterOnClose(setOption)
                            }
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <OptionForm option={option} setOption={setOption} />
                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn
                            color='secondary'
                            onClick={() => setToggleModal(!toggleModal)}
                        >
                            Close
                        </MDBBtn>
                        <MDBBtn onClick={handleSubmitOption}>
                            Save changes
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
};

export default OptionModal;
