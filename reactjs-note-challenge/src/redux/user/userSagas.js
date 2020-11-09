import {
    put,
    takeLatest,
    takeEvery,
    call,
} from "redux-saga/effects";

import {
    LOAD_USER_INFO,
    LOAD_USER_INFO_SUCCESS,
    LOAD_USER_INFO_FAILURE
} from './userActionTypes';

import { loginUser } from "../../api/Srvc/userSrvc";

function* loadLoginUser(action) {
    try {
        const res = yield call(loginUser);
        console.log('reess', res.data.token);
        yield put({
            type: LOAD_USER_INFO_SUCCESS,
            data: { payload: res.data.token }
        });
    } catch (error) {
        console.log(error)
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
