export enum GameActionTypes {
  SET_INITIAL_LOADING_END = 'SET_INITIAL_LOADING_END',
  SET_NEW_GAME = 'SET_NEW_GAME',
  SET_SAVED_GAME = 'SET_SAVED_GAME',
  SET_IS_END_GAME = 'SET_IS_END_GAME',
  SET_IS_PAUSE_GAME = 'SET_IS_PAUSE_GAME',
  SET_GAME_TIME_COUNT = 'SET_GAME_TIME_COUNT',
  SET_GAME_MOVE_COUNT = 'SET_GAME_MOVE_COUNT',
  SET_GAME_PAIR = 'SET_GAME_PAIR',
  SET_GAME_FLIPPED = 'SET_GAME_FLIPPED',
  SET_GAME_INACTIVE = 'SET_GAME_INACTIVE',
  SET_IS_GAME_IN_PROGRESS = 'SET_IS_GAME_IN_PROGRESS',
  SET_GAME_OPTIONS = 'SET_GAME_OPTIONS',
};

export interface ISetInitialLoadingEnd {
  type: GameActionTypes.SET_INITIAL_LOADING_END;
};

export interface ISetNewGame {
  type: GameActionTypes.SET_NEW_GAME;
};

export interface ISetSavedGame {
  type: GameActionTypes.SET_SAVED_GAME;
  payload: {
    game: IGameState;
  };
};

export interface ISetGameOptions {
  type: GameActionTypes.SET_GAME_OPTIONS;
  payload: {
    field: string;
    speed: string;
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

export type GameAction = ISetInitialLoadingEnd
  | ISetIsEndGame | ISetGamePair | ISetIsPauseGame | ISetNewGame | ISetSavedGame
  | ISetGameTimeCount | ISetGameMoveCount | ISetGameInactive | ISetGameFlipped
  | ISetIsGameInProgress | ISetGameOptions;

export interface IGameCard {
  id: number;
  face: string;
};

export interface IGameState {
  isInitialLoading: boolean;
  cards: IGameCard[],
  isPauseGame: boolean;
  isGameInProgress: boolean;
  isEndGame: boolean;
  flipped: number[];
  pair: number[];
  inactive: number[];
  moveCount: number;
  timeCount: number;
  field: string;
  speed: string;
};
