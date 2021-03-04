import { Dispatch } from 'react';

import { setSettings } from '../../api/settings-api';
import {
  GameSettingsActionTypes,
  GameSettingsAction,
  IGameSettingsState,
  ISetAllGameSettings,
} from '../../types/game-settings';

export const setAllUserSettings = (settings: IGameSettingsState): ISetAllGameSettings => ({
  type: GameSettingsActionTypes.SET_ALL_GAME_SETTINGS,
  payload: settings,
});

export const saveUserSettings = (settings: IGameSettingsState) => {
  return async (dispatch: Dispatch<GameSettingsAction>) => {
    try {
      await setSettings(settings);
      dispatch(setAllUserSettings(settings));
    } catch (e) {
      // dispatch(setUserStatisticsError(e.message));
    }
  }
};
