import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';
import SliderItem from './SliderItem';
import images from './data';

const SliderList = (props) => {
    return (
        <MDBCarousel showIndicators showControls fade interval={10000} dark>
            <MDBCarouselInner>
                {images.map((item) => (
                    <SliderItem item={item} key={item.id} />
                ))}
            </MDBCarouselInner>
        </MDBCarousel>
    );
};

export default SliderList;
