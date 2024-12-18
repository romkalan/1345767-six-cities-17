import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getAllOffers, getOffersByCity } from './action.ts';
import { offers } from '../mocks/offers.ts';
import { DEFAULT_CITY } from '../consts/const.ts';
import { TOffer } from '../types/TOffer.ts';

const initialState = {
  city: DEFAULT_CITY,
  offers: [] as TOffer[],
  offersByCity: [] as TOffer[],
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
    });
});

export { reducer };
