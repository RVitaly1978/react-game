export enum GameSettingsActionTypes {
  SET_GAME_MUSIC_VOLUME = 'SET_GAME_MUSIC_VOLUME',
  SET_GAME_EFFECTS_VOLUME = 'SET_GAME_EFFECTS_VOLUME',
}

export interface ISetGameMusicVolume {
  type: GameSettingsActionTypes.SET_GAME_MUSIC_VOLUME;
  payload: number;
}

export interface ISetGameEffectsVolume {
  type: GameSettingsActionTypes.SET_GAME_EFFECTS_VOLUME;
  payload: number;
}

export type GameSettingsAction = ISetGameMusicVolume | ISetGameEffectsVolume;

export interface IGameSettingsState {
  musicVolume: number;
  effectsVolume: number;
};
