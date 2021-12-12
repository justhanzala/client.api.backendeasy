import { all, fork } from "redux-saga/effects";
import user from "./user/saga";

export default function* rootSaga() {
  yield all([fork(user)]);
}
