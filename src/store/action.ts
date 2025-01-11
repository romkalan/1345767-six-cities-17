import { createAction } from '@reduxjs/toolkit';
import { TCityName } from '../types/TCityName.ts';
import { TSortingType } from '../types/TSortingType.ts';
import { TOfferById } from '../types/TOfferById.ts';
import { TOffer } from '../types/TOffer.ts';
import { AuthorizationStatus } from '../consts/const.ts';
import { TComment } from '../types/TComment.ts';

export const changeCity = createAction<TCityName>('offers/changeCity');
export const getAllOffers = createAction<TOffer[]>('offers/getAllOffers');
export const getOffersByCity = createAction<TCityName>(
  'offers/getOffersByCity',
);
export const getOfferById = createAction<TOfferById>('offers/changeOfferById');
export const getOffersNearby = createAction<TOffer[]>('offers/getOffersNearby');
export const getOfferComments = createAction<TComment[]>(
  'offers/getCommentsForOffer',
);
export const addNewComment = createAction<TComment>('offers/addNewComment');
export const changeSortingType = createAction<TSortingType>(
  'offers/changeSortingType',
);
export const changeCurrentOfferId = createAction<string>(
  'offers/changeCurrentOfferId',
);
export const sortOffers = createAction('offers/sortOffers');
export const isOffersDataLoaded = createAction<boolean>(
  'data/isOffersDataLoaded',
);
export const isOfferByIdDataLoaded = createAction<boolean>(
  'data/isOfferByIdDataLoaded',
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization',
);

export const setError = createAction<string | null>('data/setError');
