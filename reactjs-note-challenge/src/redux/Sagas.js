import { all } from "redux-saga/effects";
import noteSagas from './note/noteSagas';
import userSaga from './user/userSagas';
export default function* RootSaga() {
  yield all([
    ...noteSagas(),
    ...userSaga()
  ]);
}