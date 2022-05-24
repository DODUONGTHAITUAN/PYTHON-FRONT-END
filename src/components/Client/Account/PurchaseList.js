import PurchaseItem from './PurchaseItem';

const PurchaseList = (props) => {
    const { lineItems } = props;

    return (
        <div className='pl pb-3'>
            {/* <h4 className='mb-3'>Đơn hàng của tôi</h4> */}
            {lineItems?.length > 0 &&
                lineItems.map((item) => (
                    <PurchaseItem item={item} key={item.id} />
                ))}
        </div>
    );
};

export default PurchaseList;
