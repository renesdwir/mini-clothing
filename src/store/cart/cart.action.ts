import { CartItemTypes } from "../../types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const validationAddToCart = (
  cartItems: CartItemTypes[],
  newItems: CartItemTypes
) => {
  const existingItem = cartItems.find((item) => item.id === newItems.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItems.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newItems, quantity: 1 }];
};
export const changeQuantityFunc = (
  cartItems: CartItemTypes[],
  itemId: number,
  command: string
) => {
  const existingItem = cartItems.find((item) => item.id === itemId);
  if (existingItem) {
    if (existingItem.quantity - 1 === 0 && command === "dec") {
      return cartItems.filter((item) => item.id !== itemId);
    } else {
      return cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? {
              ...cartItem,
              quantity:
                command === "dec"
                  ? cartItem.quantity - 1
                  : cartItem.quantity + 1,
            }
          : cartItem
      );
    }
  } else {
    return cartItems;
  }
};
export const removeCartItemFunction = (
  cartItems: CartItemTypes[],
  itemId: number
) => cartItems.filter((item: CartItemTypes) => item.id !== itemId);

export const setIsCartOpen = (boolean: boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, boolean);

export const addToCart = (cartItems: any, item: CartItemTypes) => {
  const newCartItems = validationAddToCart(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const changeQuantity = (
  cartItems: any[] | [],
  itemId: number,
  command: string
) => {
  const newCartItems = changeQuantityFunc(cartItems, itemId, command);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (cartItems: any, itemId: number) => {
  const newCartItems = removeCartItemFunction(cartItems, itemId);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
