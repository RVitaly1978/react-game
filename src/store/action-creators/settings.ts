import { Dispatch } from 'react';

import { saveToLocalStorage } from './../../utils/save-to-localStorage';
import { RootState } from './../reducers/index';
import {
  GameSettingsActionTypes, IGameSettingsState, GameSettingsAction,
} from '../../types/game-settings';

export const setAllUserSettings = (settings: IGameSettingsState): GameSettingsAction => ({
  type: GameSettingsActionTypes.SET_ALL_GAME_SETTINGS,
  payload: settings,
});

export const setGameMusicVolume = (musicVolume: number): GameSettingsAction => ({
  type: GameSettingsActionTypes.SET_GAME_MUSIC_VOLUME,
  payload: { musicVolume },
});

export const updateMusicVolume = (musicVolume: number) => {
  return (dispatch: Dispatch<GameSettingsAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();
    dispatch(setGameMusicVolume(musicVolume));
    saveToLocalStorage(game, { ...settings, musicVolume }, options);
  };
};

export const setGameEffectsVolume = (effectsVolume: number): GameSettingsAction => ({
  type: GameSettingsActionTypes.SET_GAME_EFFECTS_VOLUME,
  payload: { effectsVolume },
});

export const updateEffectsVolume = (effectsVolume: number) => {
  return (dispatch: Dispatch<GameSettingsAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();
    dispatch(setGameEffectsVolume(effectsVolume));
    saveToLocalStorage(game, { ...settings, effectsVolume }, options);
  };
};

export const setGameUserNick = (userNick: string): GameSettingsAction => ({
  type: GameSettingsActionTypes.SET_GAME_USER_NICK,
  payload: { userNick },
});

export const updateGameUserNick = (userNick: string) => {
  return (dispatch: Dispatch<GameSettingsAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();
    dispatch(setGameUserNick(userNick));
    saveToLocalStorage(game, { ...settings, userNick }, options);
  };
};

export const setGameTheme = (theme: string): GameSettingsAction => ({
  type: GameSettingsActionTypes.SET_GAME_THEME,
  payload: { theme },
});

export const updateGameTheme = (theme: string) => {
  return (dispatch: Dispatch<GameSettingsAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();
    dispatch(setGameTheme(theme));
    saveToLocalStorage(game, { ...settings, theme }, options);
  };
};

export const setGameLang = (lang: string): GameSettingsAction => ({
  type: GameSettingsActionTypes.SET_GAME_LANG,
  payload: { lang },
});

export const updateGameLang = (lang: string) => {
  return (dispatch: Dispatch<GameSettingsAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();
    dispatch(setGameLang(lang));
    saveToLocalStorage(game, { ...settings, lang }, options);
  };
};
