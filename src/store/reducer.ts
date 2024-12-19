import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  getAllOffers,
  getAllComments,
  getOffersByCity,
} from './action.ts';
import { offers } from '../mocks/offers.ts';
import { comments } from '../mocks/comments.ts';
import { DEFAULT_CITY } from '../consts/const.ts';
import { TOffer } from '../types/TOffer.ts';
import { TComment } from '../types/TComment.ts';

const initialState = {
  city: DEFAULT_CITY,
  offers: [] as TOffer[],
  offersByCity: [] as TOffer[],
  comments: [] as TComment[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(getAllOffers, (state) => {
      state.offers = offers;
    })
    .addCase(getOffersByCity, (state, { payload }) => {
      state.offersByCity = state.offers.filter(
        (offer) => offer.city.name === payload,
      );
    })
    .addCase(getAllComments, (state) => {
      state.comments = comments;
    });
});

export { reducer };
