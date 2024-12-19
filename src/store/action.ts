import { createAction } from '@reduxjs/toolkit';
import { TCityName } from '../types/TCityName.ts';

export const changeCity = createAction<TCityName>('offers/changeCity');
export const getAllOffers = createAction('offers/getAllOffers');
export const getOffersByCity = createAction<TCityName>(
  'offers/getOffersByCity',
);
export const getAllComments = createAction('offers/getCommentsForOffer');
