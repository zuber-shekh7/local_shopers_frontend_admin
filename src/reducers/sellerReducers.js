import {
  GET_SELLERS_FAIL,
  GET_SELLERS_REQUEST,
  GET_SELLERS_SUCCESS,
} from "../constants/sellers";

const getSellersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SELLERS_REQUEST:
      return { loading: true };
    case GET_SELLERS_SUCCESS:
      return { ...state, loading: false, sellers: action.payload };
    case GET_SELLERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { getSellersReducer };
