import { ReactNode, createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { CategoryMapTypes } from "../types";

interface CategoriesProviderProps {
  children: ReactNode;
}
interface CategoriesMapTypes {
  [title: string]: CategoryMapTypes[];
}
interface CategoryContextValue {
  categoriesMap: CategoriesMapTypes;
}
export const CategoriesContext = createContext<CategoryContextValue>({
  categoriesMap: {} as CategoriesMapTypes,
});

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
