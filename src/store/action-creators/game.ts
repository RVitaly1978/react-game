import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'react';

import { saveResults } from './../../api/game-api';
import { initialGameState } from './../reducers/game-reducer';
import { setGameSaving, setGameSavingError } from './common';
import { CommonAction } from './../../types/common';
import { GameAction, GameActionTypes, IGameState} from '../../types/game';
import { RootState } from './../reducers/index';
import { saveToLocalStorage } from '../../utils/save-to-localStorage';
import { getCards } from './../../utils/get-cards';

export const setNewGame = (game: IGameState): GameAction => ({
  type: GameActionTypes.SET_NEW_GAME,
  payload: { game },
});

export const setIsEndGame = (): GameAction => ({
  type: GameActionTypes.SET_IS_END_GAME,
});

export const setIsPauseGame = (isPauseGame: boolean): GameAction => ({
  type: GameActionTypes.SET_IS_PAUSE_GAME,
  payload: { isPauseGame },
});

export const setIsGameInProgress = (isGameInProgress: boolean): GameAction => ({
  type: GameActionTypes.SET_IS_GAME_IN_PROGRESS,
  payload: { isGameInProgress },
});

export const setTimeCount = (): GameAction => ({
  type: GameActionTypes.SET_GAME_TIME_COUNT,
});

export const setMoveCount = (): GameAction => ({
  type: GameActionTypes.SET_GAME_MOVE_COUNT,
});

export const setGamePair = (pair: string[]): GameAction => ({
  type: GameActionTypes.SET_GAME_PAIR,
  payload: { pair },
});

export const setGameFlipped = (flipped: string[]): GameAction => ({
  type: GameActionTypes.SET_GAME_FLIPPED,
  payload: { flipped },
});

export const setGameInactive = (inactive: string[]): GameAction => ({
  type: GameActionTypes.SET_GAME_INACTIVE,
  payload: { inactive },
});

// thunk creators ----------------------------------------------------------

export const pauseGame = (isPauseGame: boolean) => {
  return (dispatch: Dispatch<GameAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();

    dispatch(setIsPauseGame(isPauseGame));

    game.isPauseGame = isPauseGame;
    saveToLocalStorage(game, settings, options);
  };
};

export const newGame = () => {
  return (dispatch: Dispatch<GameAction>, getState: () => RootState ) => {
    const { options } = getState();
    const cards = getCards(options);
    dispatch(setNewGame({ ...initialGameState, cards }));
  };
};

export const updateTimeCount = () => {
  return (dispatch: Dispatch<GameAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();

    dispatch(setTimeCount());

    game.timeCount = game.timeCount + 1;
    saveToLocalStorage(game, settings, options);
  };
};

export const setGameTic = (id: string) => {
  return (dispatch: Dispatch<GameAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();
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
      dispatch(setGameFlipped([...flipped.slice(2)]));
    } else {
      dispatch(setGamePair([...active]));
    }

    saveToLocalStorage(game, settings, options);
  };
};

export const saveResult = () => {
  return async (dispatch: ThunkDispatch<
    RootState, void, GameAction | CommonAction>, getState: () => RootState ) => {
    const { game, settings, options } = getState();
    const result = {
      time: game.timeCount,
      moves: game.moveCount,
      userNick: settings.userNick,
      ...options,
    };

    try {
      dispatch(setGameSaving(true));
      await saveResults(result, settings, options);
    } catch (e) {
      dispatch(setGameSavingError(e.message));
    } finally {
      dispatch(setGameSaving(false));
    }
  };
};
