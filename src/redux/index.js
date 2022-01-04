import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducers } from "./rootSlice";
import sagas from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: reducers,
  middleware,
});

sagaMiddleware.run(sagas);

export default store;
