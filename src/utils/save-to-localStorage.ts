import { IGameOptionsState } from './../types/game-options';
import { IGameState } from '../types/game';
import { IGameSettingsState } from '../types/game-settings';

export const saveToLocalStorage = (
  game: IGameState, settings: IGameSettingsState, options: IGameOptionsState,
): void => {
  const data = JSON.stringify({ game, settings, options });
  localStorage.setItem('react-game-data', data);
};
