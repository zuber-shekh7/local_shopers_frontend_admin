import {
  GET_CUSTOMERS_FAIL,
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
} from "../constants/customers";

const getCustomersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_REQUEST:
      return { loading: true };
    case GET_CUSTOMERS_SUCCESS:
      return { ...state, loading: false, customers: action.payload };
    case GET_CUSTOMERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { getCustomersReducer };
