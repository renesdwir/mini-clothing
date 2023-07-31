import { createStore, applyMiddleware, Middleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
// import { logger } from "./middleware/logger";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

let middleWares: Middleware[] = [];

if (process.env.NODE_ENV !== "production") {
  middleWares.push(logger);
  middleWares.push(sagaMiddleware);
  // middleWares.push(thunk);
}
const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleWares))
  //applyMiddleware(...middleWares)
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
