export enum GameOptionsActionTypes {
  SET_ALL_GAME_OPTIONS = 'SET_ALL_GAME_OPTIONS',
};

export interface ISetAllGameOptions {
  type: GameOptionsActionTypes.SET_ALL_GAME_OPTIONS;
  payload: IGameOptionsState;
};

export type GameOptionsAction = ISetAllGameOptions;

export interface IGameOptionsState {
  field: string;
  speed: string;
  difficulty: string;
};
