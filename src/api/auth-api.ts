import jwt_decode from 'jwt-decode';

import { IGameOptionsState } from './../types/game-options';
import { IGameSettingsState } from './../types/game-settings';
import { $host, $authHost } from './hosts';

const REGISTRATION_ENDPOINT = '/registration';
const LOGIN_ENDPOINT = '/login';
const CHECK_ENDPOINT = '/user/auth';

export interface ITokenUserData {
  id: string;
  email: string;
};

export const registration = async (
  email: string, password: string, settings: IGameSettingsState, options: IGameOptionsState
) => {
  try {
    const { data: { token } } = await $host
      .post(REGISTRATION_ENDPOINT, { email, password, settings, options });

    localStorage.setItem('react-game-token', token);

    const { id }: ITokenUserData = jwt_decode(token);
    return { id, email };
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { data: { token, settings, options } } = await $host.post(LOGIN_ENDPOINT, { email, password });

    localStorage.setItem('react-game-token', token);

    const { id }: ITokenUserData = jwt_decode(token);
    return { id, email, settings, options };
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const check = async () => {
  try {
    const { data: { token } } = await $authHost.get(CHECK_ENDPOINT);

    localStorage.setItem('react-game-token', token);

    const { id, email }: ITokenUserData = jwt_decode(token);
    return { id, email };
  } catch (e) {
    throw new Error(e.message);
  }
};
