import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

const logger = (store: any) => (next: any) => (action: any) => {
  if (!action.payload) {
    return next(action);
  }
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());
  next(action);
  console.log("nextState", store.getState());
};

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
