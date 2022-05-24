import ProductItem from './ProductItem';

const ProductList = (props) => {
    const { products, isGridLayout } = props;
    return (
        <div
            className='ap__right__bottom'
            style={{
                flexDirection: `${isGridLayout ? 'row' : 'column'}`,
            }}
        >
            {products?.length > 0 &&
                products.map((item) => (
                    <ProductItem
                        item={item}
                        key={item.id}
                        listLayout={isGridLayout}
                    />
                ))}
        </div>
    );
};

export default ProductList;
