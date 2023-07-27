import { createSelector } from "reselect";

export const getCartState = (state: any) => state.cart;

export const getCartItemsData = createSelector(
  getCartState,
  (cartState) => cartState.cartItems
);

export const getIsCartOpenData = createSelector(
  getCartState,
  (cartState) => cartState.isCartOpen
);

export const getCartCount = createSelector(getCartItemsData, (cartItems) =>
  cartItems.reduce(
    (total: number, cartItem: any) => total + cartItem.quantity,
    0
  )
);

export const getCartTotal = createSelector(getCartItemsData, (cartItems) =>
  cartItems.reduce(
    (total: number, cartItem: any) =>
      total + cartItem.price * cartItem.quantity,
    0
  )
);
