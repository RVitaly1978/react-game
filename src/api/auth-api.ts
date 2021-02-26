import { $host, $authHost } from './hosts';

const REGISTRATION_ENDPOINT = '/registration';
const LOGIN_ENDPOINT = '/login';

export const registration = async (email: string, password: string) => {
  const response = await $host.post(REGISTRATION_ENDPOINT, { email, password });
  return response;
};

export const login = async (email: string, password: string) => {
  const response = await $host.post(LOGIN_ENDPOINT, { email, password });
  return response;
};

export const check = async () => {
  const response = await $authHost.post(LOGIN_ENDPOINT);
  return response;
};
