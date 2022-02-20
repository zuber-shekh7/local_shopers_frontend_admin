import {
  GET_BUSINESS_CATEGORIES_REQUEST,
  GET_BUSINESS_CATEGORIES_SUCCESS,
  GET_BUSINESS_CATEGORIES_FAIL,
  GET_BUSINESS_CATEGORY_REQUEST,
  GET_BUSINESS_CATEGORY_SUCCESS,
  GET_BUSINESS_CATEGORY_FAIL,
  CREATE_BUSINESS_CATEGORY_REQUEST,
  CREATE_BUSINESS_CATEGORY_SUCCESS,
  CREATE_BUSINESS_CATEGORY_FAIL,
  EDIT_BUSINESS_CATEGORY_REQUEST,
  EDIT_BUSINESS_CATEGORY_SUCCESS,
  EDIT_BUSINESS_CATEGORY_FAIL,
  DELETE_BUSINESS_CATEGORY_REQUEST,
  DELETE_BUSINESS_CATEGORY_SUCCESS,
  DELETE_BUSINESS_CATEGORY_FAIL,
} from "../constants/businessCategory";

const getBusinessCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS_CATEGORIES_REQUEST:
      return { loading: true };
    case GET_BUSINESS_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case GET_BUSINESS_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const createBusinessCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BUSINESS_CATEGORY_REQUEST:
      return { loading: true };
    case CREATE_BUSINESS_CATEGORY_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case CREATE_BUSINESS_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const getBusinessCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS_CATEGORY_REQUEST:
      return { loading: true };
    case GET_BUSINESS_CATEGORY_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case GET_BUSINESS_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const editBusinessCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_BUSINESS_CATEGORY_REQUEST:
      return { loading: true };
    case EDIT_BUSINESS_CATEGORY_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case EDIT_BUSINESS_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const deleteBusinessCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BUSINESS_CATEGORY_REQUEST:
      return { loading: true };
    case DELETE_BUSINESS_CATEGORY_SUCCESS:
      return { ...state, loading: false, success: action.payload };
    case DELETE_BUSINESS_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {
  getBusinessCategoriesReducer,
  createBusinessCategoryReducer,
  getBusinessCategoryReducer,
  editBusinessCategoryReducer,
  deleteBusinessCategoryReducer,
};
