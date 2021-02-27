// import { ThunkDispatch } from "redux-thunk";

import {
  GameActionTypes,
  ISetInitialLoadingEnd } from "../../types/game";

export const setInitialLoadingEnd = (): ISetInitialLoadingEnd => ({
  type: GameActionTypes.SET_INITIAL_LOADING_END,
});
