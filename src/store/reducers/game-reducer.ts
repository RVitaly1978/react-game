import {
  IGameState,
  GameAction,
  GameActionTypes } from '../../types/game';

const initialState: IGameState = {
  isInitialLoading: true,
  isStartGame: false,
  isEndGame: false,
  currentGameProgress: 0,
};

const gameReducer = (state = initialState, action: GameAction): IGameState => {
  switch (action.type) {
    case GameActionTypes.SET_INITIAL_LOADING_END:
      return { ...state, isInitialLoading: false };
    case GameActionTypes.SET_IS_END_GAME:
      return { ...state, isEndGame: true };
    case GameActionTypes.SET_CURRENT_GAME_PROGRESS:
      return { ...state, currentGameProgress: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
