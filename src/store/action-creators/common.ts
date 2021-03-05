import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'react';

import { check } from '../../api/auth-api';
import { setAllUserSettings } from './settings';
import { setAllGameOptions } from './options';
import { setNewGame } from './game';
import { setUserAuth, setUserLogout } from './auth';
import { AuthAction, IAuthState } from '../../types/auth';
import { GameOptionsAction } from '../../types/game-options';
import { GameSettingsAction } from '../../types/game-settings';
import { GameAction, IGameState } from '../../types/game';
import { CommonAction, CommonActionTypes } from '../../types/common';

export const restoreSavedGame = (game: IGameState) => {
  return (dispatch: Dispatch<GameAction>) => {
    dispatch(setNewGame(game));
  };
};

export const setInitialLoading = (isInitialLoading: boolean): CommonAction => ({
  type: CommonActionTypes.SET_INITIAL_LOADING,
  payload: { isInitialLoading },
});

export const setGameSaving = (isGameSaving: boolean): CommonAction => ({
  type: CommonActionTypes.SET_GAME_SAVING,
  payload: { isGameSaving },
});

export const setGameSavingError = (gameSavingError: string | null): CommonAction => ({
  type: CommonActionTypes.SET_GAME_SAVING_ERROR,
  payload: { gameSavingError },
});

export const setOptionsSaving = (isOptionsSaving: boolean): CommonAction => ({
  type: CommonActionTypes.SET_OPTIONS_SAVING,
  payload: { isOptionsSaving },
});

export const setOptionsSavingError = (optionsSavingError: string | null): CommonAction => ({
  type: CommonActionTypes.SET_OPTIONS_SAVING_ERROR,
  payload: { optionsSavingError },
});

// thunk creators --------------------------------------------------

export const initialization = () => {
  return async (dispatch: ThunkDispatch<
    IAuthState, void, AuthAction | GameAction | GameSettingsAction
    | GameOptionsAction | CommonAction>) => {
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
