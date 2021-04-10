import {
  IAuthState,
  AuthAction,
  AuthActionTypes } from '../../types/auth';

const initialAuthState: IAuthState = {
  userId: null,
  userEmail: null,
  userAuthError: null,
  isLoading: false,
  isAuth: false,
};

export const authReducer = (state = initialAuthState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER_AUTH:
      return { ...state, ...action.payload, isAuth: true, isLoading: false, };

    case AuthActionTypes.SET_USER_LOGOUT:
      return { ...initialAuthState };

    case AuthActionTypes.SET_USER_AUTH_ERROR:
      return { ...initialAuthState, ...action.payload, isLoading: false };

    case AuthActionTypes.SET_USER_AUTH_FETCH:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
