import { ReactNode, createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";
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
  const [products, setProducts] = useState<ProductTypes[]>(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
