import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import {createNetworkMiddleware} from 'react-native-offline';

import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {
  SAVE_FAVORITE_PRODUCTS_REQUEST,
  SET_FAVORITE_PRODUCTS,
} from './actionsType';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
  actionTypes: [SAVE_FAVORITE_PRODUCTS_REQUEST],
});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [networkMiddleware, sagaMiddleware];

const store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares), offline(offlineConfig)),
);

sagaMiddleware.run(rootSaga);

export default store;
