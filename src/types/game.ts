export enum GameActionTypes {
  SET_NEW_GAME = 'SET_NEW_GAME',
  SET_IS_END_GAME = 'SET_IS_END_GAME',
  SET_IS_PAUSE_GAME = 'SET_IS_PAUSE_GAME',
  SET_GAME_TIME_COUNT = 'SET_GAME_TIME_COUNT',
  SET_GAME_MOVE_COUNT = 'SET_GAME_MOVE_COUNT',
  SET_GAME_PAIR = 'SET_GAME_PAIR',
  SET_GAME_FLIPPED = 'SET_GAME_FLIPPED',
  SET_GAME_INACTIVE = 'SET_GAME_INACTIVE',
  SET_IS_GAME_IN_PROGRESS = 'SET_IS_GAME_IN_PROGRESS',
};

export interface ISetNewGame {
  type: GameActionTypes.SET_NEW_GAME;
  payload: {
    game: IGameState;
  };
};

export interface ISetIsGameInProgress {
  type: GameActionTypes.SET_IS_GAME_IN_PROGRESS;
  payload: {
    isGameInProgress: boolean;
  };
};

export interface ISetIsEndGame {
  type: GameActionTypes.SET_IS_END_GAME;
};

export interface ISetGameTimeCount {
  type: GameActionTypes.SET_GAME_TIME_COUNT;
};

export interface ISetGameMoveCount {
  type: GameActionTypes.SET_GAME_MOVE_COUNT;
};

export interface ISetIsPauseGame {
  type: GameActionTypes.SET_IS_PAUSE_GAME;
  payload: {
    isPauseGame: boolean;
  };
};

export interface ISetGamePair {
  type: GameActionTypes.SET_GAME_PAIR;
  payload: {
    pair: number[];
  };
};

export interface ISetGameFlipped {
  type: GameActionTypes.SET_GAME_FLIPPED;
  payload: {
    flipped: number[];
  };
};

export interface ISetGameInactive {
  type: GameActionTypes.SET_GAME_INACTIVE;
  payload: {
    inactive: number[];
  };
};

export type GameAction = ISetIsEndGame | ISetIsPauseGame | ISetNewGame
  | ISetGameTimeCount | ISetGameMoveCount | ISetGameInactive | ISetGameFlipped
  | ISetIsGameInProgress | ISetGamePair;

export interface IGameCard {
  id: number;
  face: string;
};

export interface IGameState {
  isPauseGame: boolean;
  isGameInProgress: boolean;
  isEndGame: boolean;
  cards: IGameCard[],
  flipped: number[];
  pair: number[];
  inactive: number[];
  moveCount: number;
  timeCount: number;
};
