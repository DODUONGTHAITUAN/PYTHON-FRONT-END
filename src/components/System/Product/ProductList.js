import ProductItem from './ProductItem';

const ths = [
    {
        id: 1,
        title: 'Date',
        className: 'col col-1',
    },
    {
        id: 2,
        title: 'Product ID',
        className: 'col col-2',
    },
    {
        id: 3,
        title: 'Name',
        className: 'col col-3',
    },
    {
        id: 4,
        title: 'Price',
        className: 'col col-4',
    },
    {
        id: 5,
        title: 'Brand',
        className: 'col col-5',
    },
    {
        id: 6,
        title: 'Actions',
        className: 'col col-6',
    },
];

const ProductList = (props) => {
    const { products, handleDeleteProduct } = props;
    return (
        <div className='container'>
            <ul className='responsive-table'>
                <li className='table-header'>
                    {ths.map((item) => (
                        <div className={item.className} key={item.id}>
                            {item.title}
                        </div>
                    ))}
                </li>
                {products?.length !== 0 &&
                    products.map((item) => {
                        return (
                            <ProductItem
                                item={item}
                                key={item.id}
                                handleDeleteProduct={handleDeleteProduct}
                            />
                        );
                    })}
            </ul>
        </div>
    );
};

export default ProductList;
