import {
  IGameSettingsState,
  GameSettingsAction,
  GameSettingsActionTypes } from '../../types/game-settings';

const initialState: IGameSettingsState = {
  musicVolume: 5,
  effectsVolume: 5,
};

const gameSettingsReducer = (state = initialState, action: GameSettingsAction): IGameSettingsState => {
  switch (action.type) {
    case GameSettingsActionTypes.SET_GAME_MUSIC_VOLUME:
      return { ...state, musicVolume: action.payload };

    case GameSettingsActionTypes.SET_GAME_EFFECTS_VOLUME:
      return { ...state, effectsVolume: action.payload };

    case GameSettingsActionTypes.SET_ALL_GAME_SETTINGS:
      return { ...action.payload };

    default:
      return state;
  }
};

export default gameSettingsReducer;
