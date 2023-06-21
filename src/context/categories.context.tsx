import { ReactNode, createContext, useEffect, useState } from "react";
import { CategoriesMapTypes } from "../types";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

interface CategoriesProviderProps {
  children: ReactNode;
}

interface CategoryContextValue {
  categoriesMap: {};
}
export const CategoriesContext = createContext<CategoryContextValue>({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
