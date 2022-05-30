import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "../saga/userHandleSaga";
import { GET_USER } from "../reducer/reducer";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
