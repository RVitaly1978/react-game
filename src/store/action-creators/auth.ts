import { ThunkDispatch } from 'redux-thunk';

import { login, registration } from '../../api';
import { setAllUserSettings } from './settings';
import { setNewGame } from './game';
import {
  AuthActionTypes,
  ISetUserAuth,
  ISetUserAuthError,
  ISetUserLogout,
  AuthAction,
  IAuthState, 
  ISetUserAuthFetch} from '../../types/auth';
import { GameAction } from '../../types/game';
import { GameSettingsAction } from './../../types/game-settings';
import { RootState } from '../reducers';

export const setUserAuth = (id: string, email: string): ISetUserAuth => ({
  type: AuthActionTypes.SET_USER_AUTH,
  payload: {
    userId: id,
    userEmail: email,
  },
});

export const setUserAuthFetch = (): ISetUserAuthFetch => ({
  type: AuthActionTypes.SET_USER_AUTH_FETCH,
  payload: {
    isLoading: true,
  },
});

export const setUserAuthError = (error: string | null): ISetUserAuthError => ({
  type: AuthActionTypes.SET_USER_AUTH_ERROR,
  payload: {
    userAuthError: error,
  },
});

export const setUserLogout = (): ISetUserLogout => ({
  type: AuthActionTypes.SET_USER_LOGOUT,
});

export const userLogout = () => {
  return (dispatch: ThunkDispatch<IAuthState, void, AuthAction | GameAction>) => {
    localStorage.removeItem('react-game-token');
    localStorage.removeItem('react-game-data');
    dispatch(setNewGame());
    dispatch(setUserLogout());
  }
};

export const userLogin = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<IAuthState, void, AuthAction | GameSettingsAction>) => {
    try {
      dispatch(setUserAuthFetch());
      const { id, settings } = await login(email, password);
      dispatch(setUserAuth(id, email));
      dispatch(setAllUserSettings(settings));
    } catch (e) {
      dispatch(setUserAuthError(e.response.data.message));
      throw new Error();
    }
  }
};

export const userRegistration = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<IAuthState, void, AuthAction>, getState: () => RootState) => {
    const { gameSettings } = getState();
    try {
      dispatch(setUserAuthFetch());
      const { id } = await registration(email, password, gameSettings);
      dispatch(setUserAuth(id, email));
    } catch (e) {
      dispatch(setUserAuthError(e.response.data.message));
      throw new Error();
    }
  }
};
