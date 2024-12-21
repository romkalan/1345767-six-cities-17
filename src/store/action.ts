import { createAction } from '@reduxjs/toolkit';
import { TCityName } from '../types/TCityName.ts';
import { TSortingType } from '../types/TSortingType.ts';

export const changeCity = createAction<TCityName>('offers/changeCity');
export const getAllOffers = createAction('offers/getAllOffers');
export const getOffersByCity = createAction<TCityName>(
  'offers/getOffersByCity',
);
export const changeSortingType = createAction<TSortingType>(
  'offers/changeSortingType',
);
export const sortOffers = createAction('offers/sortOffers');
export const getAllComments = createAction('offers/getCommentsForOffer');
