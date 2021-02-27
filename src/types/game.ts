export enum GameActionTypes {
  SET_INITIAL_LOADING_END = 'SET_INITIAL_LOADING_END',
  SET_IS_END_GAME = 'SET_IS_END_GAME',
  SET_CURRENT_GAME_PROGRESS = 'SET_CURRENT_GAME_PROGRESS',
};

export interface ISetInitialLoadingEnd {
  type: GameActionTypes.SET_INITIAL_LOADING_END;
};

export interface ISetIsEndGame {
  type: GameActionTypes.SET_IS_END_GAME;
};

export interface ISetCurrentGameProgress {
  type: GameActionTypes.SET_CURRENT_GAME_PROGRESS;
  payload: number;
};

export type GameAction = ISetInitialLoadingEnd | ISetIsEndGame | ISetCurrentGameProgress;

export interface IGameState {
  isInitialLoading: boolean;
  isStartGame: boolean;
  isEndGame: boolean;
  currentGameProgress: number;
};
