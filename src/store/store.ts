import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
