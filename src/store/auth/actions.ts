import {
  ADD_SPENT_TIME,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESET,
  SET_USER,
} from '../actionsType';
import {LoginPayload, LoginRequest} from './types';
import {User} from '../../@types/user';

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
  type: LOGIN_USER_REQUEST,
  payload,
});

export const setUser = (payload: User) => ({
  type: SET_USER,
  payload,
});

export const addSpentTime = (payload: any) => ({
  type: ADD_SPENT_TIME,
  payload,
});
