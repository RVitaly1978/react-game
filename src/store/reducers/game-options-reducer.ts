import {
  IGameOptionsState,
  GameOptionsAction,
  GameOptionsActionTypes } from '../../types/game-options';
import { FIELD_SMALL, SPEED_SLOW, DIFFICULTY_EASY } from '../../utils/constants';

export const initialOptionsState: IGameOptionsState = {
  field: FIELD_SMALL,
  speed: SPEED_SLOW,
  difficulty: DIFFICULTY_EASY,
};

export const gameOptionsReducer = (state = initialOptionsState, action: GameOptionsAction): IGameOptionsState => {
  switch (action.type) {
    case GameOptionsActionTypes.SET_ALL_GAME_OPTIONS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
