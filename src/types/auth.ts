export enum AuthActionTypes {
  SET_USER_AUTH = 'SET_USER_AUTH',
  SET_USER_AUTH_ERROR = 'SET_USER_AUTH_ERROR',
  SET_USER_LOGOUT = 'SET_USER_LOGOUT',
};

export interface IPayloadUserAuth {
  userId: null | string;
  userEmail: null | string;
};

export interface IPayloadUserAuthError {
  userAuthError: null | string;
};

export interface ISetUserAuth {
  type: AuthActionTypes.SET_USER_AUTH;
  payload: IPayloadUserAuth;
};

export interface ISetUserLogout {
  type: AuthActionTypes.SET_USER_LOGOUT;
};

export interface ISetUserAuthError {
  type: AuthActionTypes.SET_USER_AUTH_ERROR;
  payload: IPayloadUserAuthError;
};

export type AuthAction = ISetUserAuth | ISetUserLogout | ISetUserAuthError;

export interface IAuthState {
  userId: null | string;
  userEmail: null | string;
  userAuthError: null | string;
  isAuth: boolean;
};
