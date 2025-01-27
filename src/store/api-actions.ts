import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../consts/const.ts';
import { TAppDispatch, TState } from '../types/TState.ts';
import { TAuthData, TResponseUserData } from '../types/TAuthData.ts';
import { TOffer } from '../types/TOffer.ts';
import { TOfferById } from '../types/TOfferById.ts';
import { dropUserData, saveUserData } from '../services/token.ts';
import { redirectToRoute } from './action.ts';
import { TComment, TCommentData } from '../types/TComment.ts';
import {
  getAllOffers,
  getOfferById,
  getOffersNearby,
} from './offersProcess/offersProcess.ts';
import {
  addNewComment,
  getOfferComments,
} from './commentsProcess/commentsProcess.ts';
import { getFavoriteOffers } from './favoriteProcess/favoriteProcess.ts';

const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TOffer[]>(APIRoute.Offers);
  dispatch(getAllOffers(data));
});

const fetchFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('data/fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TOffer[]>(APIRoute.FavoriteOffers);
  dispatch(getFavoriteOffers(data));
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('user/checkAuth', async (_arg, { extra: api }) => {
  await api.get(APIRoute.LoginData);
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
  dispatch(redirectToRoute(AppRoute.Root));
});

const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.LogoutData);
  dropUserData();
});

const fetchOfferById = createAsyncThunk<
  void,
  string,
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>('data/fetchOfferById', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<TOfferById>(`${APIRoute.Offers}/${id}`);
  dispatch(getOfferById(data));
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

const uploadFavoriteOfferStatus = createAsyncThunk<
  TOffer,
  { offerId: string; favoriteStatus: boolean },
  { dispatch: TAppDispatch; state: TState; extra: AxiosInstance }
>(
  'favorite/uploadFavoriteOffer',
  async ({ offerId, favoriteStatus }, { getState, extra: api }) => {
    const nextFavoriteStatus = Number(!favoriteStatus);
    const { data } = await api.post<TOfferById>(
      `${APIRoute.FavoriteOffers}/${offerId}/${nextFavoriteStatus}`,
    );

    const { offers } = getState().OFFER;
    const currentOffer = offers.find((card) => card.id === data.id);

    if (!currentOffer) {
      throw new Error(`No such offer with given id: ${data.id}`);
    }

    return { ...currentOffer, isFavorite: data.isFavorite };
  },
);

export {
  fetchOffersAction,
  fetchFavoriteOffersAction,
  fetchOfferById,
  fetchOffersNearby,
  fetchOfferComments,
  postNewComment,
  checkAuthAction,
  loginAction,
  logoutAction,
  uploadFavoriteOfferStatus,
};
