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
  changeQuantity: (itemId: number, command: "dec" | "inc") => void;
  removeCartItem: (itemId: number) => void;
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
});

export const CartProvider = ({ children }: ProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemTypes[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item: CartItemTypes) => {
    setCartItems(validationAddToCart(cartItems, item));
  };
  const changeQuantity = (itemId: number, command: string) => {
    if (cartItems) {
      setCartItems(changeQuantityFunc(cartItems, itemId, command));
    }
  };
  const removeCartItem = (itemId: number) => {
    setCartItems(removeCartItemFunction(cartItems, itemId));
  };
  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    );
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCart,
    cartCount,
    changeQuantity,
    removeCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
