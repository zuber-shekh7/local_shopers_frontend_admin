import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminReducers";
import {
  getBusinessCategoriesReducer,
  getBusinessCategoryReducer,
} from "./businessCategoryReducers";

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
  getBusinessCategory: { category: null },
};

const rootReducer = combineReducers({
  adminLogin: adminLoginReducer,
  getBusinessCategories: getBusinessCategoriesReducer,
  getBusinessCategory: getBusinessCategoryReducer,
});

export default rootReducer;
export { initialState };
