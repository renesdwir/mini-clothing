import { ReactNode, createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextValue {
  products: Product[];
}
export const ProductsContext = createContext<ProductContextValue>({
  products: [],
});

export const ProductsProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
