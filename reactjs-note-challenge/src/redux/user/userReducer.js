import {
    LOAD_USER_INFO,
    LOAD_USER_INFO_SUCCESS,
} from "./userActionTypes";

const UserReducer = function (
    state = {
        userInfo: '',
    },
    action = {}
) {
    switch (action.type) {
        case LOAD_USER_INFO:
            return Object.assign({}, state, {
                ...state,
                userInfo: action.data.payload,
            });
        case LOAD_USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                userInfo: action.data.payload,
            });
        default:
            return state;
    }
    
};

export default UserReducer;  