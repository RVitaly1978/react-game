import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const BASE_URL: string | undefined = process.env.REACT_APP_API_BASE_URL;

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

const $host: AxiosInstance = axios.create(config);
const $authHost: AxiosInstance = axios.create(config);

const authInterceptor = (config: AxiosRequestConfig) => {
  const token: string | null = localStorage.getItem('react-game-token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
  $host,
  $authHost,
};

