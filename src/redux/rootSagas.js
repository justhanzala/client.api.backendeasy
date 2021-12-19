import { all, fork } from "redux-saga/effects";
import user from "./user/saga";
import "../interceptor";

export default function* rootSaga() {
  yield all([fork(user)]);
}
