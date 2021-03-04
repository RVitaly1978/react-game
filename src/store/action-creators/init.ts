import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'react';

import { check } from '../../api';
import { setAllUserSettings } from './settings';
import { setAllGameOptions } from './options';
import { setIsPauseGame, setNewGame } from './game';
import { setUserAuth, setUserLogout } from './auth';
import { AuthAction, IAuthState } from '../../types/auth';
import { GameOptionsAction } from './../../types/game-options';
import { GameSettingsAction } from './../../types/game-settings';
import { GameAction, IGameState } from '../../types/game';
import { InitAction, InitActionTypes } from '../../types/init';

export const restoreSavedGame = (game: IGameState) => {
  return (dispatch: Dispatch<GameAction>) => {
    dispatch(setNewGame(game));
  };
};

export const setInitialLoading = (isInitialLoading: boolean): InitAction => ({
  type: InitActionTypes.SET_INITIAL_LOADING,
  payload: { isInitialLoading },
});

export const initialization = () => {
  return async (dispatch: ThunkDispatch<
    IAuthState, void, AuthAction | GameAction | GameSettingsAction | GameOptionsAction | InitAction>) => {
    try {
      const { id, email } = await check();
      dispatch(setUserAuth(id, email));

      const saved = localStorage.getItem('react-game-data');
      if (saved) {
        const { game, settings, options } = JSON.parse(saved);

        dispatch(setAllUserSettings(settings));
        dispatch(setAllGameOptions(options));
        dispatch(restoreSavedGame(game));
      }
    } catch (e) {
      dispatch(setUserLogout());
    } finally {
      dispatch(setInitialLoading(false));
    }
  }
};
