import {
  IAuthState,
  AuthAction,
  AuthActionTypes } from '../../types/auth';

const initialState: IAuthState = {
  userId: null,
  userEmail: null,
  userAuthError: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER_AUTH:
      return { ...state, ...action.payload, isAuth: true };
    case AuthActionTypes.SET_USER_LOGOUT:
      return { ...initialState };
    case AuthActionTypes.SET_USER_AUTH_ERROR:
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
};
