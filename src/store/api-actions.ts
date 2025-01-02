import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../consts/const.ts';
import { TAppDispatch, TState } from '../types/TState.ts';
import { TAuthData, TResponseUserData } from '../types/TAuthData.ts';
import { TOffer } from '../types/TOffer.ts';
import { TOfferById } from '../types/TOfferById.ts';
import { dropUserData, saveUserData } from '../services/token.ts';
import {
  addNewComment,
  getAllOffers,
  getOfferById,
  getOfferComments,
  getOffersNearby,
  isOfferByIdDataLoaded,
  isOffersDataLoaded,
  requireAuthorization,
} from './action.ts';
import { TComment } from '../types/TComment.ts';

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

const fetchOfferById = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('data/fetchOfferById', async (_arg, { dispatch, getState, extra: api }) => {
  const state = getState();
  const { data } = await api.get<TOfferById>(
    `${APIRoute.Offers}/${state.currentOfferId}`,
  );
  dispatch(getOfferById(data));
  dispatch(isOfferByIdDataLoaded(true));
});

const fetchOffersNearby = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>(
  'data/fetchOffersNearby',
  async (_arg, { dispatch, getState, extra: api }) => {
    const state = getState();
    const { data } = await api.get<TOffer[]>(
      `${APIRoute.Offers}/${state.currentOfferId}/nearby`,
    );
    dispatch(getOffersNearby(data));
  },
);

const fetchOfferComments = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>(
  'data/fetchOfferComments',
  async (_arg, { dispatch, getState, extra: api }) => {
    const state = getState();
    const { data } = await api.get<TComment[]>(
      `${APIRoute.Comments}/${state.currentOfferId}`,
    );
    dispatch(getOfferComments(data));
  },
);

const postNewComment = createAsyncThunk<
  void,
  TComment,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>(
  'data/postNewComment',
  async (
    { id, date, user, comment, rating },
    { dispatch, getState, extra: api },
  ) => {
    const state = getState();
    const { data } = await api.post<TComment>(
      `${APIRoute.Comments}/${state.currentOfferId}`,
      {
        id,
        date,
        user,
        comment,
        rating,
      },
    );
    dispatch(addNewComment(data));
  },
);

export {
  fetchOffersAction,
  fetchOfferById,
  fetchOffersNearby,
  fetchOfferComments,
  postNewComment,
  checkAuthAction,
  loginAction,
  logoutAction,
};
