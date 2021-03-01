import {
  IGameState,
  GameAction,
  GameActionTypes } from '../../types/game';
import shuffleArray from '../../utils/shuffle-array';

export const cards = [
  { id: 1, face: 'a' },
  { id: 2, face: 'a' },
  { id: 3, face: 'b' },
  { id: 4, face: 'b' },
  { id: 5, face: 'c' },
  { id: 6, face: 'c' },
  { id: 7, face: 'd' },
  { id: 8, face: 'd' },
  { id: 9, face: 'e' },
  { id: 10, face: 'e' },
];

const shuffled = shuffleArray(cards);
const initialState: IGameState = {
  isInitialLoading: true,
  cards: shuffled,
  isPauseGame: true,
  isEndGame: false,
  flipped: [...shuffled.map(({ id }) => id)],
  pair: [],
  inactive: [],
  moveCount: 0,
  timeCount: 0,
};

const gameReducer = (state = initialState, action: GameAction): IGameState => {
  switch (action.type) {
    case GameActionTypes.SET_INITIAL_LOADING_END:
      return { ...state, isInitialLoading: false };

    case GameActionTypes.SET_NEW_GAME:
      return {
        ...initialState,
        isInitialLoading: state.isInitialLoading,
        cards: shuffleArray(cards),
        isPauseGame: false,
      };

    case GameActionTypes.SET_SAVED_GAME:
      return action.payload.game;

    case GameActionTypes.SET_IS_END_GAME:
      return { ...state, isEndGame: true };

    case GameActionTypes.SET_IS_PAUSE_GAME:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_GAME_TIME_COUNT:
      return { ...state, timeCount: state.timeCount + 1 };

    case GameActionTypes.SET_GAME_MOVE_COUNT:
      return { ...state, moveCount: state.moveCount + 1 };

    case GameActionTypes.SET_GAME_PAIR:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_GAME_FLIPPED:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_GAME_INACTIVE:
      return { ...state, inactive: [...state.inactive, ...action.payload.inactive] };

    default:
      return state;
  }
};

export default gameReducer;
