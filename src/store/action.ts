import { createAction } from '@reduxjs/toolkit';
import { TCityName } from '../types/TCityName.ts';
import { TSortingType } from '../types/TSortingType.ts';
import { TOfferById } from '../types/TOfferById.ts';
import { TOffer } from '../types/TOffer.ts';
import { AuthorizationStatus } from '../consts/const.ts';

export const changeCity = createAction<TCityName>('offers/changeCity');
export const getAllOffers = createAction<TOffer[]>('offers/getAllOffers');
export const getOffersByCity = createAction<TCityName>(
  'offers/getOffersByCity',
);
export const changeSortingType = createAction<TSortingType>(
  'offers/changeSortingType',
);
export const changeOfferById = createAction<TOfferById>(
  'offers/changeOfferById',
);
export const sortOffers = createAction('offers/sortOffers');
export const getAllComments = createAction('offers/getCommentsForOffer');
export const isOffersDataLoaded = createAction<boolean>(
  'data/isOffersDataLoaded',
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization',
);
