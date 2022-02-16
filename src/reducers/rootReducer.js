import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminReducers";
import { getBusinessCategoriesReducer } from "./businessCategoryReducers";

const initialState = {
  adminLogin: {
    user: localStorage.getItem("admin")
      ? JSON.parse(localStorage.getItem("admin", null))
      : null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token", null))
      : null,
  },
  getBusinessCategories: { categories: null },
};

const rootReducer = combineReducers({
  adminLogin: adminLoginReducer,
  getBusinessCategories: getBusinessCategoriesReducer,
});

export default rootReducer;
export { initialState };
