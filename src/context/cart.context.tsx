import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";
import { CartItemTypes, ProviderProps } from "../types";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItemTypes[];
  addToCart: (item: CartItemTypes) => void;
  cartCount: number;
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
  cartCount: 0,
});

export const CartProvider = ({ children }: ProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemTypes[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item: CartItemTypes) => {
    setCartItems(validationAddToCart(cartItems, item));
  };
  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    );
  }, [cartItems]);

  const value = { isCartOpen, setIsCartOpen, cartItems, addToCart, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
