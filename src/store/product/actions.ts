import {getProductListRequest} from './types';
import {
  GET_PRODUCTS_LIST_REQUEST,
  SAVE_FAVORITE_PRODUCTS_REQUEST,
  SET_FAVORITE_PRODUCTS,
  SET_SEARCH_PRODUCT_NAME,
} from '../actionsType';

export const getProductsRequest = (payload: any): getProductListRequest => ({
  type: GET_PRODUCTS_LIST_REQUEST,
  payload,
});

export const setSearchProductName = (payload: any) => ({
  type: SET_SEARCH_PRODUCT_NAME,
  payload,
});

export const setFavoriteProducts = (payload: any) => ({
  type: SET_FAVORITE_PRODUCTS,
  payload,
});
export const saveFavoritesProductsRequest = (payload: any) => ({
  type: SAVE_FAVORITE_PRODUCTS_REQUEST,
  payload,
  meta: {
    retry: true,
  },
});
