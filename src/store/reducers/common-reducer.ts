import {
  ICommonState,
  CommonAction,
  CommonActionTypes } from '../../types/common';

export const initState: ICommonState = {
  isInitialLoading: true,
  isGameSaving: false,
  gameSavingError: null,
  isOptionsSaving: false,
  optionsSavingError: null,
  isStatisticsFetching: false,
  statisticsFetchingError: null,
};

export const commonReducer = (state = initState, action: CommonAction): ICommonState => {
  switch (action.type) {
    case CommonActionTypes.SET_INITIAL_LOADING:
    case CommonActionTypes.SET_GAME_SAVING:
    case CommonActionTypes.SET_GAME_SAVING_ERROR:
    case CommonActionTypes.SET_OPTIONS_SAVING:
    case CommonActionTypes.SET_OPTIONS_SAVING_ERROR:
    case CommonActionTypes.SET_STATISTICS_FETCHING:
    case CommonActionTypes.SET_STATISTICS_FETCHING_ERROR:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
