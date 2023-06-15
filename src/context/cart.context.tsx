import { Dispatch, SetStateAction, createContext, useState } from "react";
import { CartItemTypes, ProviderProps } from "../types";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItemTypes[];
  addToCart: (item: CartItemTypes) => void;
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

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
});

export const CartProvider = ({ children }: ProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemTypes[]>([]);

  const addToCart = (item: CartItemTypes) => {
    setCartItems(validationAddToCart(cartItems, item));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
