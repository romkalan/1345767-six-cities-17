import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  getAllOffers,
  getAllComments,
  getOffersByCity,
  changeSortingType,
  sortOffers,
  changeOfferById,
} from './action.ts';
import { offerById } from '../mocks/offerById.ts';
import { comments } from '../mocks/comments.ts';
import { DEFAULT_CITY, DEFAULT_SORTING } from '../consts/const.ts';
import { TOffer } from '../types/TOffer.ts';
import { TComment } from '../types/TComment.ts';
import { TCityName } from '../types/TCityName.ts';
import { TOfferById } from '../types/TOfferById.ts';
import { TSortingType } from '../types/TSortingType.ts';

type InitialState = {
  city: TCityName;
  offers: TOffer[];
  offersByCity: TOffer[];
  offerById: TOfferById;
  comments: TComment[];
  sortingType: TSortingType;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  offersByCity: [],
  offerById: offerById,
  comments: [],
  sortingType: DEFAULT_SORTING,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(getAllOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(getOffersByCity, (state, { payload }) => {
      state.offersByCity = state.offers.filter(
        (offer) => offer.city.name === payload,
      );
    })
    .addCase(changeSortingType, (state, { payload }) => {
      state.sortingType = payload;
    })
    .addCase(changeOfferById, (state, { payload }) => {
      state.offerById = payload;
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
