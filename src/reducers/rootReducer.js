import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminReducers";

const initialState = {
  adminLogin: {
    user: localStorage.getItem("admin")
      ? JSON.parse(localStorage.getItem("admin", null))
      : null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token", null))
      : null,
  },
};

const rootReducer = combineReducers({
  adminLogin: adminLoginReducer,
});

export default rootReducer;
export { initialState };
