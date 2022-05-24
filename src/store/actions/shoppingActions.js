import actionTypes from './actionTypes';

export const addToCart = (itemId) => ({
    type: actionTypes.ADD_TO_CART,
    payload: {
        itemId,
    },
});

export const removeFromCart = (itemId) => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
        id: itemId,
    },
});

export const adjustQty = (itemId, value) => ({
    type: actionTypes.ADJUST_QTY,
    payload: {
        id: itemId,
        qty: value,
    },
});

export const loadCurrentItem = (item) => ({
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: {
        item,
    },
});
