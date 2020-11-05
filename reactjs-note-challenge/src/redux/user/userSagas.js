import {
    put,
    takeLatest,
    call,
} from "redux-saga/effects";

import {
    LOAD_USER_INFO,
    LOAD_USER_INFO_SUCCESS,
    LOAD_USER_INFO_FAILURE
} from './userActionTypes';

import userSrvc from "../../api/Srvc/userSrvc";
// const postsApi = new userSrvc;
function loginUser() {
    const request = userSrvc.loginUser();
    return request;
}

function* loadLoginUser(action) {
    console.log(action);
    try {
        const res = yield call(loginUser, action.data);
        console.log(action.data, res)
        yield put({
            type: LOAD_USER_INFO_SUCCESS,
            data: { payload: res.data, params: action }
        });
    } catch (error) {
        yield put({
            type: LOAD_USER_INFO_FAILURE,
            error: error
        });
    }
}
function* loadLoginUserWatcher() {
    yield takeLatest(LOAD_USER_INFO, loadLoginUser);
}

export default function () {
    return [
        loadLoginUserWatcher(),
    ];
}
