import { ThunkDispatch } from 'redux-thunk';

import { RootState } from './../reducers/index';
import { setOptions } from '../../api/options-api';
import {
  GameOptionsActionTypes, GameOptionsAction, IGameOptionsState,
} from "../../types/game-options";

export const setAllGameOptions = (options: IGameOptionsState): GameOptionsAction => ({
  type: GameOptionsActionTypes.SET_ALL_GAME_OPTIONS,
  payload: options,
});

export const saveUserGameOptions = (options: IGameOptionsState) => {
  return async (dispatch: ThunkDispatch<RootState, void, GameOptionsAction>, getState: () => RootState) => {
    const { settings } = getState();
    try {
      await setOptions(options, settings);
      dispatch(setAllGameOptions(options));
    } catch (e) {
      // dispatch(setError(e.message));
    }
  }
};
