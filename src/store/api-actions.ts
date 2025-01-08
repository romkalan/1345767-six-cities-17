import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus } from '../consts/const.ts';
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
  redirectToRoute,
  requireAuthorization,
} from './action.ts';
import { TComment, TCommentData } from '../types/TComment.ts';

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
  dispatch(redirectToRoute(AppRoute.Root));
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
  string,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('data/fetchOfferById', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<TOfferById>(`${APIRoute.Offers}/${id}`);
  dispatch(getOfferById(data));
  dispatch(isOfferByIdDataLoaded(true));
});

const fetchOffersNearby = createAsyncThunk<
  void,
  string,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('data/fetchOffersNearby', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<TOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
  dispatch(getOffersNearby(data));
});

const fetchOfferComments = createAsyncThunk<
  void,
  string,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('data/fetchOfferComments', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${id}`);
  dispatch(getOfferComments(data));
});

const postNewComment = createAsyncThunk<
  void,
  TCommentData,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>(
  'data/postNewComment',
  async ({ offerId, ...commentData }, { dispatch, extra: api }) => {
    const { data } = await api.post<TComment>(
      `${APIRoute.Comments}/${offerId}`,
      commentData,
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
