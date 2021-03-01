export enum GameSettingsActionTypes {
  SET_GAME_MUSIC_VOLUME = 'SET_GAME_MUSIC_VOLUME',
  SET_GAME_EFFECTS_VOLUME = 'SET_GAME_EFFECTS_VOLUME',
  SET_ALL_GAME_SETTINGS = 'SET_ALL_GAME_SETTINGS',
}

export interface ISetGameMusicVolume {
  type: GameSettingsActionTypes.SET_GAME_MUSIC_VOLUME;
  payload: number;
}

export interface ISetGameEffectsVolume {
  type: GameSettingsActionTypes.SET_GAME_EFFECTS_VOLUME;
  payload: number;
}

export interface ISetAllGameSettings {
  type: GameSettingsActionTypes.SET_ALL_GAME_SETTINGS;
  payload: IGameSettingsState;
}

export type GameSettingsAction = ISetGameMusicVolume | ISetGameEffectsVolume | ISetAllGameSettings;

export interface IGameSettingsState {
  musicVolume: number;
  effectsVolume: number;
};
