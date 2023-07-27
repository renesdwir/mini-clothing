import { createContext, useReducer } from "react";
import { CartItemTypes, ProviderProps } from "../types";
import { createAction } from "../utils/reducer/reducer.utils";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (item: boolean) => void;
  cartItems: CartItemTypes[];
  addToCart: (item: CartItemTypes) => void;
  cartCount: number;
  changeQuantity: (itemId: number, command: "dec" | "inc") => void;
  removeCartItem: (itemId: number) => void;
  cartTotal: number;
}

const validationAddToCart = (
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

const changeQuantityFunc = (
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
const removeCartItemFunction = (cartItems: CartItemTypes[], itemId: number) =>
  cartItems.filter((item: CartItemTypes) => item.id !== itemId);

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  cartCount: 0,
  changeQuantity: () => {},
  removeCartItem: () => {},
  cartTotal: 0,
});
export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
const cartReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};
export const CartProvider = ({ children }: ProviderProps) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (item: CartItemTypes) => {
    const newCartItems = validationAddToCart(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const changeQuantity = (itemId: number, command: string) => {
    if (cartItems) {
      const newCartItems = changeQuantityFunc(cartItems, itemId, command);
      updateCartItemsReducer(newCartItems);
    }
  };

  const removeCartItem = (itemId: number) => {
    const newCartItems = removeCartItemFunction(cartItems, itemId);
    updateCartItemsReducer(newCartItems);
  };

  const updateCartItemsReducer = (newCartItems: any) => {
    const cartCount = newCartItems.reduce(
      (total: number, cartItem: any) => total + cartItem.quantity,
      0
    );

    const cartTotal = newCartItems.reduce(
      (total: number, cartItem: any) =>
        total + cartItem.price * cartItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartCount: cartCount,
        cartItems: newCartItems,
        cartTotal: cartTotal,
      })
    );
  };
  const setIsCartOpen = (bool: boolean) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCart,
    cartCount,
    changeQuantity,
    removeCartItem,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
