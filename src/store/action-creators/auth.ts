import { saveToLocalStorage } from './../../utils/save-to-localStorage';
import { ThunkDispatch } from 'redux-thunk';

import { login, registration } from '../../api/auth-api';
import { setAllUserSettings } from './settings';
import { setNewGame } from './game';
import { setAllGameOptions } from './options';
import { AuthActionTypes, AuthAction, IAuthState } from '../../types/auth';
import { GameAction } from '../../types/game';
import { GameSettingsAction } from './../../types/game-settings';
import { GameOptionsAction } from './../../types/game-options';
import { initialSettingsState } from '../reducers/game-settings-reducer';
import { initialOptionsState } from './../reducers/game-options-reducer';
import { initialGameState } from './../reducers/game-reducer';
import { getCards } from './../../utils/get-cards';

export const setUserAuth = (id: string, email: string): AuthAction => ({
  type: AuthActionTypes.SET_USER_AUTH,
  payload: {
    userId: id,
    userEmail: email,
  },
});

export const setUserAuthFetch = (): AuthAction => ({
  type: AuthActionTypes.SET_USER_AUTH_FETCH,
  payload: {
    isLoading: true,
  },
});

export const setUserAuthError = (error: string | null): AuthAction => ({
  type: AuthActionTypes.SET_USER_AUTH_ERROR,
  payload: {
    userAuthError: error,
  },
});

export const setUserLogout = (): AuthAction => ({
  type: AuthActionTypes.SET_USER_LOGOUT,
});

export const userLogout = () => {
  return (dispatch: ThunkDispatch<IAuthState, void, AuthAction | GameSettingsAction | GameOptionsAction>) => {
    dispatch(setAllUserSettings(initialSettingsState));
    dispatch(setAllGameOptions(initialOptionsState));
    dispatch(setUserLogout());
    localStorage.removeItem('react-game-token');
    localStorage.removeItem('react-game-data');
  }
};

export const userLogin = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<
    IAuthState, void, AuthAction | GameSettingsAction | GameAction | GameOptionsAction>) => {
    try {
      dispatch(setUserAuthFetch());

      const { id, settings, options } = await login(email, password);

      dispatch(setUserAuth(id, email));
      dispatch(setAllUserSettings(settings));
      dispatch(setAllGameOptions(options));

      const game = { ...initialGameState, cards: getCards(options) };
      dispatch(setNewGame(game));

      saveToLocalStorage(game, settings, options);
    } catch (e) {
      dispatch(setUserAuthError(e.message));
      throw new Error();
    }
  }
};

export const userRegistration = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<IAuthState, void, AuthAction | GameAction>) => {
    try {
      dispatch(setUserAuthFetch());

      const settings = initialSettingsState;
      const options = initialOptionsState;
      const { id } = await registration(email, password, settings, options);

      dispatch(setUserAuth(id, email));

      const game = { ...initialGameState, cards: getCards(options) };
      dispatch(setNewGame(game));

      saveToLocalStorage(game, settings, options);
    } catch (e) {
      dispatch(setUserAuthError(e.message));
      throw new Error();
    }
  }
};
