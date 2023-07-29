import { createSelector } from "reselect";

export const getCategoriesState = (state: any) => state.categories;

export const getCategoriesData = createSelector(
  getCategoriesState,
  (categoriesState) => categoriesState.categories
);

export const getCategoriesMap = createSelector(
  getCategoriesData,
  (categoriesData) => {
    return categoriesData.reduce((acc: any, category: any) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

// export const getCategoriesMap = (state: any) => {
//   console.log("Selecctor FIRED");

//   return state.categories.categories.reduce((acc: any, category: any) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// };

export const getIsLoadingCategories = createSelector(
  getCategoriesState,
  (categoriesState) => {
    console.log(categoriesState);
    return categoriesState.isLoading;
  }
);
