import { ThunkDispatch } from 'redux-thunk';

import { CommonAction } from './../../types/common';
import { setOptionsSaving, setOptionsSavingError } from './common';
import { RootState } from './../reducers/index';
import { setOptions } from '../../api/options-api';
import {
  GameOptionsActionTypes, GameOptionsAction, IGameOptionsState,
} from "../../types/game-options";

export const setAllGameOptions = (options: IGameOptionsState): GameOptionsAction => ({
  type: GameOptionsActionTypes.SET_ALL_GAME_OPTIONS,
  payload: options,
});

export const saveGameOptions = (options: IGameOptionsState) => {
  return async (dispatch: ThunkDispatch<
    RootState, void, GameOptionsAction | CommonAction>, getState: () => RootState) => {
    const { settings } = getState();

    try {
      dispatch(setOptionsSaving(true));

      await setOptions(options, settings);

      dispatch(setAllGameOptions(options));
      dispatch(setOptionsSavingError(null));
    } catch (e) {
      dispatch(setOptionsSavingError(e.message));
    } finally {
      dispatch(setOptionsSaving(false));
    }
  }
};
