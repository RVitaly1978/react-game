import {
  GameOptionsActionTypes,
  GameOptionsAction,
  IGameOptionsState,
} from "../../types/game-options";

export const setAllGameOptions = (options: IGameOptionsState): GameOptionsAction => ({
  type: GameOptionsActionTypes.SET_ALL_GAME_OPTIONS,
  payload: options,
});
