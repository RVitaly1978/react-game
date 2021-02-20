export enum GameActionTypes {
  SET_IS_END_GAME = 'SET_IS_END_GAME',
  SET_CURRENT_GAME_PROGRESS = 'SET_CURRENT_GAME_PROGRESS',
};

export interface ISetIsEndGame {
  type: GameActionTypes.SET_IS_END_GAME;
  payload: boolean;
};

export interface ISetCurrentGameProgress {
  type: GameActionTypes.SET_CURRENT_GAME_PROGRESS;
  payload: number;
};

export type GameAction = ISetIsEndGame | ISetCurrentGameProgress;

export interface IGameState {
  isEndGame: boolean;
  currentGameProgress: number;
};
