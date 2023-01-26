import {
  LOADING,
  LOGIN_USER_LOADING,
  SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_RESET,
  FAILURE,
  SET_USER,
} from '../actionsType';
import {AuthActions, AuthState} from './types';

const INITIAL_STATE: AuthState = {
  isLoadingActionAuth: false,
  statusAuth: '',
  errorAuth: '',
  userDetails: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, {type, payload}: AuthActions) => {
  switch (type) {
    case LOGIN_USER_LOADING:
      return {
        ...state,
        isLoadingActionAuth: true,
        statusAuth: LOADING,
        errorAuth: null,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoadingActionAuth: false,
        statusAuth: SUCCESS,
        errorAuth: null,
        userDetails: payload.data,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoadingActionAuth: false,
        statusAuth: FAILURE,
        errorAuth: payload.error,
      };

    case LOGIN_USER_RESET:
      return {
        ...state,
        isLoadingActionAuth: false,
        statusAuth: '',
        errorAuth: null,
      };

    case SET_USER:
      return {
        ...state,
        userDetails: payload,
      };

    default:
      return state;
  }
};
