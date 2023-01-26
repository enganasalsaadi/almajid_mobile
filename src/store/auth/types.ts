import {User} from '../../@types/user';
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_LOADING,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_RESET,
  SET_USER,
} from '../actionsType';

export interface AuthState {
  isLoadingActionAuth: boolean;
  statusAuth: string;
  errorAuth: string;
  userDetails: User | null;
}

export interface LoginPayload {
  values: {email: string; password: string; type: string};
  callback: any | null;
}

export interface LoginRequest {
  type: typeof LOGIN_USER_REQUEST;
  payload: LoginPayload;
}

export interface LoginLoading {
  type: typeof LOGIN_USER_LOADING;
  payload: any;
}

export interface LoginSuccess {
  type: typeof LOGIN_USER_SUCCESS;
  payload: any;
}
export interface LoginFailure {
  type: typeof LOGIN_USER_FAIL;
  payload: any;
}

export interface LoginReset {
  type: typeof LOGIN_USER_RESET;
  payload: any;
}

export interface setUser {
  type: typeof SET_USER;
  payload: any;
}

export type AuthActions =
  | LoginRequest
  | LoginLoading
  | LoginSuccess
  | LoginFailure
  | LoginReset
  | setUser;
