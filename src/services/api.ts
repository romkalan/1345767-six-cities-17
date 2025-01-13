import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { getUserData } from './token.ts';
import { StatusCodes } from 'http-status-codes';
import { TResponseUserData } from '../types/TAuthData.ts';
import { toast } from 'react-toastify';
import { TErrorMessage } from '../types/TErrorMessage.ts';

const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (response: AxiosResponse) =>
  [
    StatusCodes.BAD_REQUEST,
    !StatusCodes.UNAUTHORIZED,
    StatusCodes.NOT_FOUND,
  ].includes(response.status);

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const { token }: TResponseUserData = getUserData();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<TErrorMessage>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const errorMessage = error.response.data;
        toast.warn(errorMessage.message);
      }
      throw error;
    },
  );

  return api;
};

export { createAPI };
