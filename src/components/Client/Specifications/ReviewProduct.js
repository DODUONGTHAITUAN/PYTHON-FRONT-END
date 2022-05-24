const ReviewProduct = ({ detailProduct }) => {
    return (
        <div
            className='rp'
            dangerouslySetInnerHTML={{ __html: detailProduct?.contentHTML }}
        ></div>
    );
};

export default ReviewProduct;
