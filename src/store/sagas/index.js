import { userSaga } from './userSaga';
import { all } from "redux-saga/effects";

export function* watchSagas() {
  yield all([userSaga()]);
}
