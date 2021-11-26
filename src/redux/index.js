import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducers } from "./rootSlice";
// import sagas from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  logger,
  sagaMiddleware,
];

const store = configureStore({
  reducer: reducers,
  middleware,
});

// sagaMiddleware.run(sagas);

export default store;
