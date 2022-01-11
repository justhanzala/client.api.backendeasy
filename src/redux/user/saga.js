import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import {
  signup as signupAction,
  signin as signinAction,
  getUser as getUserAction,
  uploadProfile as uploadProfileAction,
} from "./actions";
import slice from "./slice";
import siteSlice from "../site/slice";

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

export function* getUser() {
  try {
    yield put(siteSlice.actions.setLoading(true));
    const {
      data: { data, loggedIn },
    } = yield call(axios.get, `${baseUrl}/get`);

    yield put(slice.actions.setUserData(data));
    yield put(slice.actions.setLoggedIn(loggedIn));
    yield put(siteSlice.actions.setLoading(false));
  } catch (e) {
    console.log(e);
  }
}

export function* profile(action) {
  try {
    yield put(siteSlice.actions.setLoading(true));
    const {
      data: { data },
    } = yield call(axios.post, `${baseUrl}/profile`, action.payload);
    console.log("data===============", data)

    yield put(slice.actions.setUserData(data));
    yield put(siteSlice.actions.setLoading(false));
  } catch (e) {
    console.log(e);
  }
}

export default function* users() {
  yield takeLatest(signupAction.type, signup);
  yield takeLatest(signinAction.type, signin);
  yield takeLatest(getUserAction.type, getUser);
  yield takeLatest(uploadProfileAction.type, profile);
}
