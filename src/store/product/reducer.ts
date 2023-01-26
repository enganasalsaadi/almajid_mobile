import {
  LOADING,
  SUCCESS,
  FAILURE,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_FAIL,
  SET_SEARCH_PRODUCT_NAME,
  GET_PRODUCTS_LIST_RESET,
  SET_FAVORITE_PRODUCTS,
} from '../actionsType';
import {ProductActions, ProductStatus} from './types';

const INITIAL_STATE: ProductStatus = {
  isLoadingActionProducts: false,
  statusProducts: '',
  errorProducts: '',
  productList: [],
  searchProductName: '',
  favoriteProducts: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, {type, payload}: ProductActions) => {
  switch (type) {
    case GET_PRODUCTS_LIST_LOADING:
      return {
        ...state,
        isLoadingActionProducts: true,
        statusProducts: LOADING,
        errorProducts: '',
      };

    case GET_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        isLoadingActionProducts: false,
        statusProducts: SUCCESS,
        errorProducts: '',
        productList: payload.data,
      };
    case GET_PRODUCTS_LIST_FAIL:
      return {
        ...state,
        isLoadingActionProducts: false,
        statusProducts: FAILURE,
        errorProducts: payload.error,
        productList: [] as any,
      };

    case GET_PRODUCTS_LIST_RESET:
      return {
        ...state,
        isLoadingActionProducts: false,
        statusProducts: '',
        errorProducts: null,
      };

    case SET_SEARCH_PRODUCT_NAME:
      return {
        ...state,
        searchProductName: payload,
      };
    case SET_FAVORITE_PRODUCTS:
      return {
        ...state,
        favoriteProducts: payload,
      };
    default:
      return state;
  }
};
