import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminReducers";
import {
  createBusinessCategoryReducer,
  editBusinessCategoryReducer,
  getBusinessCategoriesReducer,
  getBusinessCategoryReducer,
  deleteBusinessCategoryReducer,
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
  createBusinessCategory: { category: null },
  getBusinessCategory: { category: null },
  editBusinessCategory: { category: null },
  deleteBusinessCategory: { success: null },
};

const rootReducer = combineReducers({
  adminLogin: adminLoginReducer,
  getBusinessCategories: getBusinessCategoriesReducer,
  createBusinessCategory: createBusinessCategoryReducer,
  getBusinessCategory: getBusinessCategoryReducer,
  editBusinessCategory: editBusinessCategoryReducer,
  deleteBusinessCategory: deleteBusinessCategoryReducer,
});

export default rootReducer;
export { initialState };
