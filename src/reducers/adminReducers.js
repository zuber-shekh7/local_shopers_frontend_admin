import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_FAIL,
  ADMIN_LOGOUT_REQUEST,
  ADMIN_LOGOUT_SUCCESS,
} from "../constants/admin";

const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { ...state, loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADMIN_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case ADMIN_LOGOUT_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case ADMIN_LOGOUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { adminLoginReducer };
