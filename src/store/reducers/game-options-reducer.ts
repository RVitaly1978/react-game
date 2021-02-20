import {
  IGameOptionsState,
  GameOptionAction,
  GameOptionsActionTypes } from '../../types/game-options';

const initialState: IGameOptionsState = {
  musicVolume: 5,
  effectsVolume: 5,
};

const gameOptionsReducer = (state = initialState, action: GameOptionAction): IGameOptionsState => {
  switch (action.type) {
    case GameOptionsActionTypes.SET_GAME_MUSIC_VOLUME:
      return { ...state, musicVolume: action.payload };
    case GameOptionsActionTypes.SET_GAME_EFFECTS_VOLUME:
      return { ...state, effectsVolume: action.payload };
    default:
      return state;
  }
};

export default gameOptionsReducer;
