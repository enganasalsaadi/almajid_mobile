import {takeLatest, call, put} from 'redux-saga/effects';
import {
  ADD_SPENT_TIME,
  LOGIN_USER_FAIL,
  LOGIN_USER_LOADING,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from '../actionsType';
import {requestAction} from './../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addSpentTime} from './actions';

function* loginAction(action: any): any {
  try {
    yield put({type: LOGIN_USER_LOADING});

    var requestConfig = {
      type: 'post',
      url: `auth/login`,
      payload: action.payload.values,
    };
    const response = yield call(requestAction, requestConfig);

    if (response.status === 200) {
      AsyncStorage.setItem('token', JSON.stringify(response.data.token));
      AsyncStorage.setItem('user', JSON.stringify(response.data));

      action.payload.callback(response.data);
      yield put({type: LOGIN_USER_SUCCESS, payload: {data: response.data}});
    } else {
      yield put({
        type: LOGIN_USER_FAIL,
        payload: {
          error: response.meta.message,
        },
      });
    }
  } catch (error: any) { 
    yield put({
      type: LOGIN_USER_FAIL,
      payload: {
        data: 'Something wrong try again',
      },
    });
  }
}

function* addSpentTimeAction(action: any): any {
  try { 
    var requestConfig = {
      type: 'post',
      url: `users/saveSpentTime`,
      payload: action.payload,
    };
    const response = yield call(requestAction, requestConfig);
    console.log(response);
  } catch (error: any) {
    console.log(error);
  }
}

export default function* watcherSaga() {
  yield takeLatest(LOGIN_USER_REQUEST, loginAction);
  yield takeLatest(ADD_SPENT_TIME, addSpentTimeAction);
}
