import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import { signup as signupAction, signin as signinAction } from "./actions";
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

export function* signin(action) {
  try {
    const {
      data: { data, token, loggedIn },
    } = yield call(axios.post, `${baseUrl}/signin`, action.payload);
    localStorage.setItem("token", token);

    yield put(slice.actions.setUserData(data));
    yield put(slice.actions.setLoggedIn(loggedIn));
  } catch (e) {
    console.log(e);
  }
}

export default function* users() {
  yield takeLatest(signupAction.type, signup);
  yield takeLatest(signinAction.type, signin);
}
