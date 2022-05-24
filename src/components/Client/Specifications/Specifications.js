import { useState } from 'react';
import { withRouter } from 'react-router';
import ReviewProduct from './ReviewProduct';
import SpecificationsTable from './SpecificationsTable';

const Specifications = (props) => {
    const [isShowSpecifications, setShowSpecifications] = useState(false);
    const { detailProduct, productItem } = props;

    return (
        <div className='s-main'>
            <div className='s-main__left'>
                <div className='s-main__left__heading mb-2'>
                    <span>
                        {' '}
                        Đặc điểm nổi bật của {productItem?.product_name}
                    </span>
                </div>
                <ReviewProduct detailProduct={detailProduct} />
            </div>
            <div className='s-main__right'>
                <div className='s-main__right__heading mb-2'>
                    <span>Thông số kỹ thuật</span>
                </div>
                <div className='s-main__right__table'>
                    <SpecificationsTable
                        detailProduct={detailProduct}
                        productItem={productItem}
                        isShowSpecifications={isShowSpecifications}
                    />
                </div>
                <div className='s-main__right__more'>
                    <span
                        onClick={() =>
                            setShowSpecifications(!isShowSpecifications)
                        }
                    >
                        {!isShowSpecifications ? 'Xem thêm' : 'Ẩn bớt'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Specifications);
