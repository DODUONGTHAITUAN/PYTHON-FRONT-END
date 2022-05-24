import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    isLoggedIn: false,
    userInfo: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            console.log(action);
            return {
                ...state,
                userInfo: action.payload.userInfo,
                isLoggedIn: true,
            };
        case actionTypes.USER_LOGIN_FAIL:
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                userInfo: null,
                isLoggedIn: false,
            };

        default:
            return state;
    }
};

export default userReducer;
