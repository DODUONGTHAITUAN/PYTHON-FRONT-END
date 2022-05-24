import { Modal, ModalBody } from 'reactstrap';

import Loading from './Loading';

const Overlay = (props) => {
    const { isOpenModal, handleToggleModal, width, height } = props;

    return (
        <Modal
            className='overlay__wrapper'
            isOpen={isOpenModal}
            toggle={handleToggleModal}
        >
            <ModalBody className='overlay__content'>
                <Loading
                    type='spinningBubbles'
                    color='#fff'
                    width={width || '20%'}
                    height={height || '20%'}
                />
            </ModalBody>
        </Modal>
    );
};

export default Overlay;
