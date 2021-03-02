import {
  IAuthState,
  AuthAction,
  AuthActionTypes } from '../../types/auth';

const initialState: IAuthState = {
  userId: null,
  userEmail: null,
  userAuthError: null,
  isLoading: false,
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER_AUTH:
      return { ...state, ...action.payload, isAuth: true, isLoading: false, };

    case AuthActionTypes.SET_USER_LOGOUT:
      return { ...initialState };

    case AuthActionTypes.SET_USER_AUTH_ERROR:
      return { ...initialState, ...action.payload };

    case AuthActionTypes.SET_USER_AUTH_FETCH:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
