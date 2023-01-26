import {
  GET_PRODUCTS_LIST_FAIL,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_RESET,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_REQUEST,
  SET_SEARCH_PRODUCT_NAME,
  SET_FAVORITE_PRODUCTS,
} from '../actionsType';

export interface ProductStatus {
  isLoadingActionProducts: boolean;
  statusProducts: string;
  errorProducts: string | null;
  searchProductName: string;
  productList: any[];
  favoriteProducts: any[] | [];
}

export interface getProductListRequest {
  type: typeof GET_PRODUCTS_LIST_REQUEST;
  payload: any;
}

export interface ProductsLoading {
  type: typeof GET_PRODUCTS_LIST_LOADING;
  payload: any;
}

export interface ProductsSuccess {
  type: typeof GET_PRODUCTS_LIST_SUCCESS;
  payload: any;
}

export interface ProductsFailure {
  type: typeof GET_PRODUCTS_LIST_FAIL;
  payload: any;
}

export interface ProductsReset {
  type: typeof GET_PRODUCTS_LIST_RESET;
  payload: any;
}
export interface setProductSearch {
  type: typeof SET_SEARCH_PRODUCT_NAME;
  payload: any;
}
export interface setFavoriteProducts {
  type: typeof SET_FAVORITE_PRODUCTS;
  payload: any;
}

export type ProductActions =
  | ProductsLoading
  | ProductsSuccess
  | ProductsFailure
  | ProductsReset
  | setProductSearch
  | setFavoriteProducts;
