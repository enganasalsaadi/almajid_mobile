import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import productReducer from './product/reducer';
import {reducer as network} from 'react-native-offline';

const appReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  network,
});

export default appReducer;
