import {
    put,
    takeLatest,
    call,
} from "redux-saga/effects";

import {
    LOAD_NOTE_LIST,
    LOAD_NOTE_LIST_SUCCESS,
    LOAD_NOTE_LIST_FAILURE
} from './noteActionTypes';

import { getNoteList } from "../../api/Srvc/noteSrvc";

function* loadNoteList(action) {
    try {
        const res = yield call(() => getNoteList(action.data), action.data);
        console.log('reeeerrrssss', res);
        yield put({
            type: LOAD_NOTE_LIST_SUCCESS,
            data: { payload: res.data }
        });
    } catch (error) {
        yield put({
            type: LOAD_NOTE_LIST_FAILURE,
            error: error
        });
    }
}
function* loadNoteListWatcher() {
    yield takeLatest(LOAD_NOTE_LIST, loadNoteList);
}

export default function () {
    return [
        loadNoteListWatcher(),
    ];
}
