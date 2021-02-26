import jwt_decode from 'jwt-decode';
import { $host, $authHost } from './hosts';

const REGISTRATION_ENDPOINT = '/registration';
const LOGIN_ENDPOINT = '/login';
const CHECK_ENDPOINT = '/login/auth';

export interface ITokenUserData {
  id: string;
  email: string;
};

export const registration = async (email: string, password: string) => {
  const { data: { token } } = await $host.post(REGISTRATION_ENDPOINT, { email, password });
  localStorage.setItem('react-game-token', token);
  const { id }: ITokenUserData = jwt_decode(token);
  return { id, email };
};

export const login = async (email: string, password: string) => {
  const { data: { token } } = await $host.post(LOGIN_ENDPOINT, { email, password });
  localStorage.setItem('react-game-token', token);
  const { id }: ITokenUserData = jwt_decode(token);
  return { id, email };
};

export const check = async () => {
  const { data: { token } } = await $authHost.get(CHECK_ENDPOINT);
  localStorage.setItem('react-game-token', token);
  const { id, email }: ITokenUserData = jwt_decode(token);
  return { id, email };
};
