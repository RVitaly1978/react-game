import {
  IGameSettingsState,
  GameSettingsAction,
  GameSettingsActionTypes } from '../../types/game-settings';

export const initialSettingsState: IGameSettingsState = {
  userNick: 'user',
  musicVolume: 5,
  effectsVolume: 5,
  theme: 'light',
  lang: 'en',
};

export const gameSettingsReducer = (state = initialSettingsState, action: GameSettingsAction): IGameSettingsState => {
  switch (action.type) {
    case GameSettingsActionTypes.SET_GAME_MUSIC_VOLUME:
    case GameSettingsActionTypes.SET_GAME_EFFECTS_VOLUME:
    case GameSettingsActionTypes.SET_GAME_USER_NICK:
    case GameSettingsActionTypes.SET_GAME_THEME:
    case GameSettingsActionTypes.SET_GAME_LANG:
      return { ...state, ...action.payload };

    case GameSettingsActionTypes.SET_ALL_GAME_SETTINGS:
      return { ...action.payload };

    default:
      return state;
  }
};
