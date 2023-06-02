import { ReactNode, createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

interface ProductProviderProps {
  children: ReactNode;
}
export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState(PRODUCTS);
  return <ProductContext.Provider value={}>{children}</ProductContext.Provider>;
};
