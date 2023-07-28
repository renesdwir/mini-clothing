import { createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import { logger } from "./middleware/logger";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
let middleWares: Middleware[] = [];

if (process.env.NODE_ENV !== "production") {
  middleWares.push(logger);
  middleWares.push(thunk);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWares)
);
export const persistor = persistStore(store);
