import backendAPI from "../apis/backendAPI";
import {
  GET_SELLERS_FAIL,
  GET_SELLERS_REQUEST,
  GET_SELLERS_SUCCESS,
} from "../constants/sellers";

const getSellers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SELLERS_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await backendAPI.get("/admin/sellers", {
      headers: { Authorization: token },
    });

    const { sellers } = data;

    dispatch({
      type: GET_SELLERS_SUCCESS,
      loading: false,
      payload: sellers,
    });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({
      type: GET_SELLERS_FAIL,
      payload: error,
      loading: false,
    });
  }
};

export { getSellers };
