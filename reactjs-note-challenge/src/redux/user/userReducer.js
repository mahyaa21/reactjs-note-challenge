import {
    LOAD_USER_INFO_SUCCESS,
} from "./userActionTypes";

const UserReducer = function (
    state = {
        userInfo: {},
    },
    action = {}
) {
    console.log(action);
    switch (action.type) {
        case LOAD_USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                userInfo: {
                    ...action.data.payload,
                }
            });
        default:
            return state;
    }
};

export default UserReducer;  