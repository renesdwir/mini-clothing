const INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CATEGORUES_MAP":
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
