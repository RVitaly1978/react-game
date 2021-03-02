import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'react';

import { RootState } from './../reducers/index';
import {
  GameAction,
  GameActionTypes,
  ISetGameFlipped,
  ISetGameInactive,
  ISetGameMoveCount,
  ISetGamePair,
  ISetGameTimeCount,
  ISetInitialLoadingEnd, 
  ISetIsEndGame,
  ISetIsPauseGame,
  ISetIsGameInProgress,
  ISetNewGame,
  ISetGameOptions,
  IGameState} from '../../types/game';
import { saveToLocalStorage } from '../../utils/save-to-localStorage';

export const setInitialLoadingEnd = (): ISetInitialLoadingEnd => ({
  type: GameActionTypes.SET_INITIAL_LOADING_END,
});

export const setNewGame = (): ISetNewGame => ({
  type: GameActionTypes.SET_NEW_GAME,
});

export const setIsEndGame = (): ISetIsEndGame => ({
  type: GameActionTypes.SET_IS_END_GAME,
});

export const setIsPauseGame = (isPauseGame: boolean): ISetIsPauseGame => ({
  type: GameActionTypes.SET_IS_PAUSE_GAME,
  payload: { isPauseGame },
});

export const pauseGame = (isPauseGame: boolean) => {
  return (dispatch: Dispatch<any>, getState: () => RootState ) => {
    const { game, gameSettings } = getState();

    dispatch(setIsPauseGame(isPauseGame));

    game.isPauseGame = isPauseGame;
    saveToLocalStorage(game, gameSettings);
  };
};

export const setIsGameInProgress = (isGameInProgress: boolean): ISetIsGameInProgress => ({
  type: GameActionTypes.SET_IS_GAME_IN_PROGRESS,
  payload: { isGameInProgress },
});

export const setTimeCount = (): ISetGameTimeCount => ({
  type: GameActionTypes.SET_GAME_TIME_COUNT,
});

export const setMoveCount = (): ISetGameMoveCount => ({
  type: GameActionTypes.SET_GAME_MOVE_COUNT,
});

export const setGamePair = (pair: number[]): ISetGamePair => ({
  type: GameActionTypes.SET_GAME_PAIR,
  payload: { pair },
});

export const setGameFlipped = (flipped: number[]): ISetGameFlipped => ({
  type: GameActionTypes.SET_GAME_FLIPPED,
  payload: { flipped },
});

export const setGameInactive = (inactive: number[]): ISetGameInactive => ({
  type: GameActionTypes.SET_GAME_INACTIVE,
  payload: { inactive },
});

export const setGameOptions = (field: string, speed: string): ISetGameOptions => ({
  type: GameActionTypes.SET_GAME_OPTIONS,
  payload: { field, speed },
});

export const gameOptions = (field: string, speed: string) => {
  return async (dispatch: ThunkDispatch<IGameState, void, GameAction>) => {
    dispatch(setGameOptions(field, speed));
    dispatch(setNewGame());
    dispatch(setIsGameInProgress(false));
  };
};

export const updateTimeCount = () => {
  return (dispatch: Dispatch<any>, getState: () => RootState ) => {
    const { game, gameSettings } = getState();

    dispatch(setTimeCount());

    game.timeCount = game.timeCount + 1;
    saveToLocalStorage(game, gameSettings);
  };
};

export const setGameTic = (id: number) => {
  return (dispatch: Dispatch<any>, getState: () => RootState ) => {
    const { game, gameSettings } = getState();
    const { cards, pair, flipped, inactive, isEndGame } = game;
    const active = [...pair, id];

    if (active.length >= 2) {
      const firstCard = cards.find(({ id }) => id === active[0]);
      const secondCard = cards.find(({ id }) => id === active[1]);

      if (firstCard && secondCard && (firstCard.face === secondCard.face)) {
        dispatch(setGameInactive([active[0], active[1]]));

        if (cards.length === (inactive.length + 2) && !isEndGame) {
          dispatch(setIsEndGame());
        }
      }

      dispatch(setMoveCount());
      dispatch(setGamePair([...active.slice(2)]));
      dispatch(setGameFlipped([...flipped, active[0], active[1]]));
    } else {
      dispatch(setGamePair([...active]));
    }

    saveToLocalStorage(game, gameSettings);
  };
};
