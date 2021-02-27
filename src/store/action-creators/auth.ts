import { Dispatch } from "react";
import { ThunkDispatch } from "redux-thunk";

import { login, check, registration } from "../../api";
import {
  AuthActionTypes,
  ISetUserAuth,
  ISetUserAuthError,
  ISetUserLogout,
  AuthAction,
  IAuthState } from "../../types/auth";

export const setUserAuth = (id: string, email: string): ISetUserAuth => ({
  type: AuthActionTypes.SET_USER_AUTH,
  payload: {
    userId: id,
    userEmail: email,
    userAuthError: null,
  },
});

export const setUserAuthError = (error: string): ISetUserAuthError => ({
  type: AuthActionTypes.SET_USER_AUTH_ERROR,
  payload: {
    userAuthError: error,
  },
});

export const setUserLogout = (): ISetUserLogout => ({
  type: AuthActionTypes.SET_USER_LOGOUT,
});

export const userLogout = () => {
  return (dispatch: ThunkDispatch<IAuthState, void, AuthAction>) => {
    localStorage.removeItem('react-game-token');
    // localStorage.removeItem('react-game-data');
    dispatch(setUserLogout());
  }
};

export const checkUserLogged = () => {
  return async (dispatch: ThunkDispatch<IAuthState, void, AuthAction>) => {
    try {
      const { id, email } = await check();
      dispatch(setUserAuth(id, email));
    } catch (e) {
      dispatch(setUserLogout());
    }
  }
};

export const userLogin = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<IAuthState, void, AuthAction>) => {
    try {
      const { id } = await login(email, password);
      dispatch(setUserAuth(id, email));
    } catch (e) {
      dispatch(setUserAuthError(e.response.data.message));
      throw new Error();
    }
  }
};

export const userRegistration = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<IAuthState, void, AuthAction>) => {
    try {
      const { id } = await registration(email, password);
      dispatch(setUserAuth(id, email));
    } catch (e) {
      dispatch(setUserAuthError(e.response.data.message));
      throw new Error();
    }
  }
};
