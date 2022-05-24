import DropdownOption from './DropdownOption';

const tds = [
    {
        id: 1,
        prop: 'product_date',
        className: 'col col-1',
    },
    {
        id: 2,
        prop: 'id',
        className: 'col col-2',
    },
    {
        id: 3,
        title: 'Name',
        prop: 'product_name',
        className: 'col col-3',
    },
    {
        id: 4,
        prop: 'price',
        className: 'col col-4',
    },
    {
        id: 5,
        prop: 'brand_value',
        className: 'col col-5',
    },
];

const ProductItem = (props) => {
    const { item, handleDeleteProduct } = props;
    return (
        <li className='table-row'>
            {tds.map((item_td) => (
                <div key={item_td.id} className={item_td.className}>
                    {item[item_td.prop] || '$999'}
                </div>
            ))}
            <div className='col col-6 options'>
                <DropdownOption
                    id={item.id}
                    handleDeleteProduct={handleDeleteProduct}
                />
            </div>
        </li>
    );
};

export default ProductItem;
