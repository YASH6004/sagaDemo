import { call, put } from "redux-saga/effects";
import { setUser } from "../reducer/reducer";

import axios from "axios";

function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/atothey/demo/user"
  });
}


export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser());
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
