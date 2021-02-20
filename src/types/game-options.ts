export enum GameOptionsActionTypes {
  SET_GAME_MUSIC_VOLUME = 'SET_GAME_MUSIC_VOLUME',
  SET_GAME_EFFECTS_VOLUME = 'SET_GAME_EFFECTS_VOLUME',
}

export interface ISetGameMusicVolume {
  type: GameOptionsActionTypes.SET_GAME_MUSIC_VOLUME;
  payload: number;
}

export interface ISetGameEffectsVolume {
  type: GameOptionsActionTypes.SET_GAME_EFFECTS_VOLUME;
  payload: number;
}

export type GameOptionAction = ISetGameMusicVolume | ISetGameEffectsVolume;

export interface IGameOptionsState {
  musicVolume: number;
  effectsVolume: number;
};
