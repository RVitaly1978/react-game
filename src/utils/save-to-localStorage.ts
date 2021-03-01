import { IGameState } from "../types/game";
import { IGameSettingsState } from "../types/game-settings";

export const saveToLocalStorage = (game: IGameState, settings: IGameSettingsState): void => {
  const data = JSON.stringify({ game, settings });
  localStorage.setItem('react-game-data', data);
};
