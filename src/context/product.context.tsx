import { ReactNode, createContext, useEffect, useState } from "react";
import { ProductTypes } from "../types";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

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
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
