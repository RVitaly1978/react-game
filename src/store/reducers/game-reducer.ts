import {
  IGameState,
  GameAction,
  GameActionTypes } from '../../types/game';
import shuffleArray from '../../utils/shuffle-array';
import { cards } from '../../utils/cards';
import { fields, FIELD_SMALL, FIELD_BIG, SPEED_FAST } from '../../utils/constants';

const cardsSmall = cards.slice(0, fields[FIELD_SMALL]);
const cardsBig = cards.slice(0, fields[FIELD_BIG]);

const initialState: IGameState = {
  isInitialLoading: true,
  isPauseGame: false,
  isGameInProgress: true,
  isEndGame: false,
  pair: [],
  inactive: [],
  moveCount: 0,
  timeCount: 0,
  field: FIELD_BIG,
  speed: SPEED_FAST,
  cards: shuffleArray(cardsBig),
  flipped: shuffleArray(cardsBig).map(({ id }) => id),
};

const gameReducer = (state = initialState, action: GameAction): IGameState => {
  switch (action.type) {
    case GameActionTypes.SET_INITIAL_LOADING_END:
      return { ...state, isInitialLoading: false };

    case GameActionTypes.SET_NEW_GAME:
      return {
        ...initialState,
        isInitialLoading: state.isInitialLoading,
        cards: state.field === FIELD_BIG ? shuffleArray(cardsBig) : shuffleArray(cardsSmall),
        flipped: state.field === FIELD_BIG
          ? shuffleArray(cardsBig).map(({ id }) => id)
          : shuffleArray(cardsSmall).map(({ id }) => id),
      };

    case GameActionTypes.SET_SAVED_GAME:
      return action.payload.game;

    case GameActionTypes.SET_IS_END_GAME:
      return { ...state, isEndGame: true, isGameInProgress: false };

    case GameActionTypes.SET_IS_PAUSE_GAME:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_IS_GAME_IN_PROGRESS:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_GAME_TIME_COUNT:
      return { ...state, timeCount: state.timeCount + 1 };

    case GameActionTypes.SET_GAME_MOVE_COUNT:
      return { ...state, moveCount: state.moveCount + 1 };

    case GameActionTypes.SET_GAME_PAIR:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_GAME_FLIPPED:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_GAME_OPTIONS:
      return { ...state, ...action.payload };

    case GameActionTypes.SET_GAME_INACTIVE:
      return { ...state, inactive: [...state.inactive, ...action.payload.inactive] };

    default:
      return state;
  }
};

export default gameReducer;
