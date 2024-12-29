import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../types/TState.ts';
import { APIRoute, AuthorizationStatus } from '../consts/const.ts';
import { TOffer } from '../types/TOffer.ts';
import {
  getAllOffers,
  isOffersDataLoaded,
  requireAuthorization,
} from './action.ts';
import { TAuthData, TResponseUserData } from '../types/TAuthData.ts';
import { dropUserData, saveUserData } from '../services/token.ts';

const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TOffer[]>(APIRoute.Offers);
  dispatch(getAllOffers(data));
  dispatch(isOffersDataLoaded(true));
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.LoginData);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

const loginAction = createAsyncThunk<
  void,
  TAuthData,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<TResponseUserData>(APIRoute.LoginData, {
    email,
    password,
  });
  saveUserData(data);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
});

const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.LogoutData);
  dropUserData();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export { fetchOffersAction, checkAuthAction, loginAction, logoutAction };
