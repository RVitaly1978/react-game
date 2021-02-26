import { Dispatch } from "react";

import { login, registration } from "../../api";
import {
  AuthActionTypes,
  ISetUserAuth,
  ISetUserAuthError,
  ISetUserLogout } from "../../types/auth";

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

export const fetchUserLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<ISetUserAuth | ISetUserAuthError>) => {
    try {
      const { id } = await login(email, password);
      dispatch(setUserAuth(id, email));
    } catch (e) {
      dispatch(setUserAuthError(e.response.data.message));
    }
  }
};

export const fetchUserRegistration = (email: string, password: string) => {
  return async (dispatch: Dispatch<ISetUserAuth | ISetUserAuthError>) => {
    try {
      const { id } = await registration(email, password);
      dispatch(setUserAuth(id, email));
    } catch (e) {
      dispatch(setUserAuthError(e.response.data.message));
    }
  }
};
