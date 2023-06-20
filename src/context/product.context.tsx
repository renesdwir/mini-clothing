import { ReactNode, createContext, useState } from "react";
import SHOP_DATA from "../shop-data";
import { ProductTypes } from "../types";

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextValue {
  products: ProductTypes[];
}
export const ProductsContext = createContext<ProductContextValue>({
  products: [],
});

export const ProductsProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
