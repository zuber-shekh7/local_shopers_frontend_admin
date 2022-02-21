import backendAPI from "../apis/backendAPI";
import {
  GET_CUSTOMERS_FAIL,
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
} from "../constants/customers";

const getCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CUSTOMERS_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await backendAPI.get("/admin/customers", {
      headers: { Authorization: token },
    });

    const { customers } = data;

    dispatch({
      type: GET_CUSTOMERS_SUCCESS,
      loading: false,
      payload: customers,
    });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({
      type: GET_CUSTOMERS_FAIL,
      payload: error,
      loading: false,
    });
  }
};

export { getCustomers };
