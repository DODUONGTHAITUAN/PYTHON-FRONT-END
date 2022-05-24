import SpecificationsItem from './SpecificationsItem';

const mapDataToTable = (product, detailProduct) => {
    return [
        {
            id: 1,
            label: 'Màn hình',
            value: detailProduct?.screenText,
        },
        {
            id: 2,
            label: 'ram',
            value: product?.option?.ram,
        },
        {
            id: 3,
            label: 'Rom',
            value: product?.option?.rom,
        },
        {
            id: 4,
            label: 'CPU',
            value: product?.cpu,
        },
        {
            id: 5,
            label: 'GPU',
            value: product?.gpu,
        },
        {
            id: 6,
            label: 'Dung lượng pin',
            value: detailProduct?.batteryText,
        },
    ];
};

const mapDataToTableMore = (product, detailProduct) => {
    return [
        {
            id: 1,
            label: 'Thẻ sim',
            value: detailProduct?.simSlots,
        },
        {
            id: 3,
            label: 'Xuất xứ',
            value: product?.origin,
        },
        {
            id: 4,
            label: 'Thời gian ra mắt',
            value: product?.productDate,
        },
    ];
};

const SpecificationsTable = ({
    isShowSpecifications,
    detailProduct,
    productItem,
}) => {
    const trs = mapDataToTable(productItem, detailProduct);
    const trs_more = mapDataToTableMore(productItem, detailProduct);
    return (
        <table className='table table-striped table-bordered'>
            <colgroup>
                <col style={{ width: '30%' }} />
                <col style={{ width: '70%' }} />
            </colgroup>
            <tbody>
                {trs.map((item) => (
                    <SpecificationsItem item={item} key={item.id} />
                ))}
                {isShowSpecifications &&
                    trs_more.map((item) => (
                        <SpecificationsItem item={item} key={item.id} />
                    ))}
            </tbody>
        </table>
    );
};

export default SpecificationsTable;
