export enum AuthActionTypes {
  SET_USER_AUTH = 'SET_USER_AUTH',
  SET_USER_AUTH_ERROR = 'SET_USER_AUTH_ERROR',
  SET_USER_AUTH_FETCH = 'SET_USER_AUTH_FETCH',
  SET_USER_LOGOUT = 'SET_USER_LOGOUT',
};

export interface ISetUserAuth {
  type: AuthActionTypes.SET_USER_AUTH;
  payload: {
    userId: null | string;
    userEmail: null | string;
  };
};

export interface ISetUserLogout {
  type: AuthActionTypes.SET_USER_LOGOUT;
};

export interface ISetUserAuthError {
  type: AuthActionTypes.SET_USER_AUTH_ERROR;
  payload: {
    userAuthError: null | string;
  };
};

export interface ISetUserAuthFetch {
  type: AuthActionTypes.SET_USER_AUTH_FETCH;
  payload: {
    isLoading: boolean;
  };
};

export type AuthAction = ISetUserAuth
  | ISetUserLogout | ISetUserAuthError | ISetUserAuthFetch;

export interface IAuthState {
  userId: null | string;
  userEmail: null | string;
  userAuthError: null | string;
  isLoading: boolean;
  isAuth: boolean;
};
