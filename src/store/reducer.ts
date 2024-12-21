import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  getAllOffers,
  getAllComments,
  getOffersByCity,
  changeSortingType,
  sortOffers,
} from './action.ts';
import { offers } from '../mocks/offers.ts';
import { comments } from '../mocks/comments.ts';
import { DEFAULT_CITY, DEFAULT_SORTING } from '../consts/const.ts';
import { TOffer } from '../types/TOffer.ts';
import { TComment } from '../types/TComment.ts';

const initialState = {
  city: DEFAULT_CITY,
  offers: [] as TOffer[],
  offersByCity: [] as TOffer[],
  comments: [] as TComment[],
  sortingType: DEFAULT_SORTING,
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
    .addCase(changeSortingType, (state, { payload }) => {
      state.sortingType = payload;
    })
    .addCase(sortOffers, (state) => {
      switch (state.sortingType) {
        case 'Popular':
          state.offersByCity = state.offersByCity.sort(
            (a, b) => a.rating - b.rating,
          );
          break;
        case 'Price: high to low':
          state.offersByCity = state.offersByCity.sort(
            (a, b) => b.price - a.price,
          );
          break;
        case 'Price: low to high':
          state.offersByCity = state.offersByCity.sort(
            (a, b) => a.price - b.price,
          );
          break;
        case 'TopRating':
          state.offersByCity = state.offersByCity.sort(
            (a, b) => b.rating - a.rating,
          );
          break;
        default:
          break;
      }
    })
    .addCase(getAllComments, (state) => {
      state.comments = comments;
    });
});

export { reducer };
