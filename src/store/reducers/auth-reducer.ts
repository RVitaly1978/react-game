import {
  IAuthState,
  AuthAction,
  AuthActionTypes } from '../../types/auth';

const initialState: IAuthState = {
  userId: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER_DATA:
      return { ...state, ...action.payload, isAuth: true };
    default:
      return state;
  }
};

export default authReducer;
