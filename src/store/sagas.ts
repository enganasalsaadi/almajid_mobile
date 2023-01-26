import {fork} from 'redux-saga/effects';
import authSagas from './auth/sagas';

import productSagas from './product/sagas';
import {networkSaga} from 'react-native-offline';

export default function* root() {
  yield fork(authSagas);
  yield fork(productSagas);
  yield fork(networkSaga as any, {pingInterval: 20000});
}
