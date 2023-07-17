import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
