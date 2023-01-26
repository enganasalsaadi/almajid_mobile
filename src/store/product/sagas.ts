import {takeLatest, call, put} from 'redux-saga/effects';
import {
  GET_PRODUCTS_LIST_REQUEST,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_FAIL,
  GET_PRODUCTS_LIST_SUCCESS,
  SAVE_FAVORITE_PRODUCTS_REQUEST,
} from '../actionsType';
import {requestAction} from '../../api';

function* getProductAction(action: any): any {
  try {
    yield put({type: GET_PRODUCTS_LIST_LOADING});

    var requestConfig = {
      type: 'get',
      url: `products/all` + action.payload.getParams,
    };
    const response = yield call(requestAction, requestConfig);

    if (response.status === 200) {
      yield put({
        type: GET_PRODUCTS_LIST_SUCCESS,
        payload: {data: response.data},
      });
    } else {
      yield put({
        type: GET_PRODUCTS_LIST_FAIL,
        payload: {
          error: response.meta.message,
        },
      });
    }
  } catch (error: any) {
    yield put({
      type: GET_PRODUCTS_LIST_FAIL,
      payload: {
        data: 'Something wrong try again',
      },
    });
  }
}

function* saveFavoritesProductsAction(action: any): any {
  try {
    var requestConfig = {
      type: 'post',
      url: `products/saveFavorites`,
      payload: action.payload,
    };
    const response = yield call(requestAction, requestConfig);

    console.log('response favorite');
    console.log(response);
  } catch (error: any) {
    console.log('error error ');
    console.log(error);
  }
}

export default function* watcherSaga() {
  yield takeLatest(GET_PRODUCTS_LIST_REQUEST, getProductAction);
  yield takeLatest(SAVE_FAVORITE_PRODUCTS_REQUEST, saveFavoritesProductsAction);
}
