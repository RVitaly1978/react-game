export enum CommonActionTypes {
  SET_INITIAL_LOADING = 'SET_INITIAL_LOADING',
  SET_GAME_SAVING = 'SET_GAME_SAVING',
  SET_GAME_SAVING_ERROR = 'SET_GAME_SAVING_ERROR',
  SET_OPTIONS_SAVING = 'SET_OPTIONS_SAVING',
  SET_OPTIONS_SAVING_ERROR = 'SET_OPTIONS_SAVING_ERROR',
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

export type CommonAction = ISetInitialLoading | ISetGameSaving | ISetGameSavingError
  | ISetOptionsSaving | ISetOptionsSavingError;

export interface ICommonState {
  isInitialLoading: boolean;
  isGameSaving: boolean;
  gameSavingError: string | null;
  isOptionsSaving: boolean;
  optionsSavingError: string | null;
};
