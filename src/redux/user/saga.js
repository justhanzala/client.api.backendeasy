import axios from "axios";
import { call, takeLatest } from "redux-saga/effects";
import { signup as signupAction } from "./actions";
import slice from "./slice";

const baseUrl = `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user`;

export function* signup(action) {
  try {
    const { data } = yield call(
      axios.post,
      `${baseUrl}/signup`,
      action.payload
    );

    slice.actions.setUserData(data);
  } catch (e) {
    console.log(e);
  }
}

export default function* users() {
  yield takeLatest(signupAction.type, signup);
}
