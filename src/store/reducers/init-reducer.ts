import {
  IInitState,
  InitAction,
  InitActionTypes } from '../../types/init';

export const initState: IInitState = {
  isInitialLoading: true,
};

export const initReducer = (state = initState, action: InitAction): IInitState => {
  switch (action.type) {
    case InitActionTypes.SET_INITIAL_LOADING:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
