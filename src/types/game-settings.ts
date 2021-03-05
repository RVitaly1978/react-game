export enum GameSettingsActionTypes {
  SET_GAME_MUSIC_VOLUME = 'SET_GAME_MUSIC_VOLUME',
  SET_GAME_EFFECTS_VOLUME = 'SET_GAME_EFFECTS_VOLUME',
  SET_GAME_USER_NICK = 'SET_GAME_USER_NICK',
  SET_GAME_THEME = 'SET_GAME_THEME',
  SET_GAME_LANG = 'SET_GAME_LANG',
  SET_ALL_GAME_SETTINGS = 'SET_ALL_GAME_SETTINGS',
}

export interface ISetGameMusicVolume {
  type: GameSettingsActionTypes.SET_GAME_MUSIC_VOLUME;
  payload: {
    musicVolume: number;
  };
}

export interface ISetGameEffectsVolume {
  type: GameSettingsActionTypes.SET_GAME_EFFECTS_VOLUME;
  payload: {
    effectsVolume: number;
  };
}

export interface ISetGameUserNick {
  type: GameSettingsActionTypes.SET_GAME_USER_NICK;
  payload: {
    userNick: string;
  };
}

export interface ISetGameTheme {
  type: GameSettingsActionTypes.SET_GAME_THEME;
  payload: {
    theme: string;
  };
}

export interface ISetGameLang {
  type: GameSettingsActionTypes.SET_GAME_LANG;
  payload: {
    lang: string;
  };
}

export interface ISetAllGameSettings {
  type: GameSettingsActionTypes.SET_ALL_GAME_SETTINGS;
  payload: IGameSettingsState;
}

export type GameSettingsAction = ISetGameMusicVolume | ISetGameEffectsVolume
  | ISetAllGameSettings | ISetGameUserNick | ISetGameTheme | ISetGameLang;

export interface IGameSettingsState {
  userNick: string;
  musicVolume: number;
  effectsVolume: number;
  theme: string;
  lang: string;
};
