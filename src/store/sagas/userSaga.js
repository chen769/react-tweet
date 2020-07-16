import { put } from "redux-saga/effects";
import { setCurrentUser } from "../actions/User";

export function* userSaga(payload) {
  yield put(setCurrentUser(payload));
}
