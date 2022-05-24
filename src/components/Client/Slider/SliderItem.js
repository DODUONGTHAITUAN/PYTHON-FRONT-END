import { MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';

const SliderItem = (props) => {
    const { item } = props;
    return (
        <MDBCarouselItem className={item.id === 1 ? 'active' : ''}>
            <MDBCarouselElement src={item.src} alt='...' />
        </MDBCarouselItem>
    );
};
export default SliderItem;
