import { IGameState, GameAction, GameActionTypes } from '../../types/game';

export const initialGameState: IGameState = {
  isPauseGame: false,
  isGameInProgress: false,
  isEndGame: false,
  moveCount: 0,
  timeCount: 0,
  pair: [],
  inactive: [],
  cards: [],
  flipped: [],
  isLoading: false,
  error: null,
};

export const gameReducer = (state = initialGameState, action: GameAction): IGameState => {
  switch (action.type) {
    case GameActionTypes.SET_NEW_GAME:
      return { ...action.payload.game };

    case GameActionTypes.SET_IS_END_GAME:
      return { ...state, isEndGame: true, isGameInProgress: false };

    case GameActionTypes.SET_IS_PAUSE_GAME:
    case GameActionTypes.SET_IS_GAME_IN_PROGRESS:
    case GameActionTypes.SET_GAME_LOADING:
    case GameActionTypes.SET_GAME_ERROR:
    case GameActionTypes.SET_GAME_FLIPPED:
    case GameActionTypes.SET_GAME_PAIR:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_GAME_TIME_COUNT:
      return { ...state, timeCount: state.timeCount + 1 };

    case GameActionTypes.SET_GAME_MOVE_COUNT:
      return { ...state, moveCount: state.moveCount + 1 };

    case GameActionTypes.SET_GAME_INACTIVE:
      return { ...state, inactive: [...state.inactive, ...action.payload.inactive] };

    default:
      return state;
  }
};
