export enum CommonActionTypes {
  SET_INITIAL_LOADING = 'SET_INITIAL_LOADING',
  SET_GAME_SAVING = 'SET_GAME_SAVING',
  SET_GAME_SAVING_ERROR = 'SET_GAME_SAVING_ERROR',
  SET_OPTIONS_SAVING = 'SET_OPTIONS_SAVING',
  SET_OPTIONS_SAVING_ERROR = 'SET_OPTIONS_SAVING_ERROR',
  SET_STATISTICS_FETCHING = 'SET_STATISTICS_FETCHING',
  SET_STATISTICS_FETCHING_ERROR = 'SET_STATISTICS_FETCHING_ERROR',
};

export interface ISetInitialLoading {
  type: CommonActionTypes.SET_INITIAL_LOADING;
  payload: {
    isInitialLoading: boolean;
  };
};

export interface ISetGameSaving {
  type: CommonActionTypes.SET_GAME_SAVING;
  payload: {
    isGameSaving: boolean;
  };
};

export interface ISetGameSavingError {
  type: CommonActionTypes.SET_GAME_SAVING_ERROR;
  payload: {
    gameSavingError: string | null;
  };
};

export interface ISetOptionsSaving {
  type: CommonActionTypes.SET_OPTIONS_SAVING;
  payload: {
    isOptionsSaving: boolean;
  };
};

export interface ISetOptionsSavingError {
  type: CommonActionTypes.SET_OPTIONS_SAVING_ERROR;
  payload: {
    optionsSavingError: string | null;
  };
};

export interface ISetStatisticsFetching {
  type: CommonActionTypes.SET_STATISTICS_FETCHING;
  payload: {
    isStatisticsFetching: boolean;
  };
};

export interface ISetStatisticsFetchingError {
  type: CommonActionTypes.SET_STATISTICS_FETCHING_ERROR;
  payload: {
    statisticsFetchingError: string | null;
  };
};

export type CommonAction = ISetInitialLoading | ISetGameSaving | ISetGameSavingError
  | ISetOptionsSaving | ISetOptionsSavingError | ISetStatisticsFetching | ISetStatisticsFetchingError;

export interface ICommonState {
  isInitialLoading: boolean;
  isGameSaving: boolean;
  gameSavingError: string | null;
  isOptionsSaving: boolean;
  optionsSavingError: string | null;
  isStatisticsFetching: boolean;
  statisticsFetchingError: string | null;
};
