import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { Routes, Route } from "react-router-dom";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Shop = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
