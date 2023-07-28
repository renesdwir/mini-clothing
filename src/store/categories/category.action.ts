import { Dispatch } from "redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray: any) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
export const fetchCategoriesFailed = (error: any) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch: Dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
