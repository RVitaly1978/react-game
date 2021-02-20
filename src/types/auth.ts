export enum AuthActionTypes {
  SET_USER_DATA = 'SET_USER_DATA',
};

export interface IPayloadUserData {
  userId: null | number;
  login: null | string;
};

export interface ISetUserData {
  type: AuthActionTypes.SET_USER_DATA;
  payload: IPayloadUserData;
};

export type AuthAction = ISetUserData;

export interface IAuthState {
  userId: null | number;
  login: null | string;
  isAuth: boolean;
};
