export enum InitActionTypes {
  SET_INITIAL_LOADING = 'SET_INITIAL_LOADING',
};

export interface ISetInitialLoading {
  type: InitActionTypes.SET_INITIAL_LOADING;
  payload: {
    isInitialLoading: boolean;
  };
};

export type InitAction = ISetInitialLoading;

export interface IInitState {
  isInitialLoading: boolean;
};
