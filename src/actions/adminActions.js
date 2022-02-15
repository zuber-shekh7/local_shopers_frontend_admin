import backendAPI from "../apis/backendAPI";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT_REQUEST,
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_LOGOUT_FAIL,
} from "../constants/admin";

const adminLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await backendAPI.post("/admin/login", { email, password });

    const { user, token } = data;

    localStorage.setItem("admin", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));

    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: user });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ADMIN_LOGIN_FAIL, payload: error });
  }
};

const adminLogout = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGOUT_REQUEST });
    localStorage.clear();
    dispatch({ type: ADMIN_LOGOUT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ADMIN_LOGOUT_FAIL, payload: error });
  }
};

export { adminLogin, adminLogout };
