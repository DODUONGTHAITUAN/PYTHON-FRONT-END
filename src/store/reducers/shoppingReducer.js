import actionTypes from '../actions/actionTypes';
import CommonUtils from '../../utils/CommonUtils';

const INITIAL_STATE = {
    /**
     * {
     *  total_item
     * total_price
     * [] --> item {qty}
     *
     * }
     */
    cart: [],
    products: [],
    totalProducts: 0,
    totalPrice: 0,
};

const mergeProducts = (currProducts, newProducts) => {
    const data = newProducts?.filter(
        (p) => !currProducts.find((item) => item.id === p.id)
    );
    return data || [];
};

// Add to cart product
const handleAddToCartAction = (state, itemId) => {
    const productInCart = state.cart.find((item) => item.id === itemId);
    if (productInCart) {
        // exist
        return [
            ...state.cart.map((item) => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        currPrice:
                            (item.quantity + 1) *
                            CommonUtils.toNumber(
                                item?.option?.price || '4.999.000'
                            ),
                    };
                }
                return item;
            }),
        ];
    } else {
        const item = state.products.find((item) => item.id === itemId);
        // No exist
        return [
            ...state.cart,
            {
                quantity: 1,
                ...item,
                currPrice: CommonUtils.toNumber(
                    item?.option?.price || '4.999.000'
                ),
            },
        ];
    }
};

// const handleAdjustQtyAction = (state, item)

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const cartList = handleAddToCartAction(
                state,
                action.payload.itemId
            );
            return {
                ...state,
                cart: cartList,
                totalProducts: cartList.length,
                totalPrice: cartList.reduce(
                    (prev, curr) => prev + curr.currPrice,
                    0
                ),
            };

        case actionTypes.REMOVE_FROM_CART:
            console.log('heere');
            const newCart = [
                ...state.cart.filter((item) => item.id !== action.payload.id),
            ];
            return {
                ...state,
                cart: newCart,
                totalProducts: newCart.length,
                totalPrice: newCart.reduce(
                    (prev, curr) => prev + curr.currPrice,
                    0
                ),
            };

        case actionTypes.ADJUST_QTY:
            const carts = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.qty;
                    item.currPrice =
                        action.payload.qty *
                        CommonUtils.toNumber(
                            item?.option?.price || '4.999.000'
                        );
                }
                return item;
            });
            return {
                ...state,
                cart: carts,
                totalPrice: carts.reduce(
                    (prev, curr) => prev + curr.currPrice,
                    0
                ),
            };

        case actionTypes.LOAD_CURRENT_ITEM:
            const data = mergeProducts(state.products, action.payload.item);
            return {
                ...state,
                products: [...state.products, ...data],
            };

        default:
            return state;
    }
};

export default shoppingReducer;
