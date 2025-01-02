import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  getAllOffers,
  getOfferComments,
  getOffersByCity,
  changeSortingType,
  sortOffers,
  isOffersDataLoaded,
  requireAuthorization,
  getOfferById,
  changeCurrentOfferId,
  isOfferByIdDataLoaded,
  getOffersNearby,
  addNewComment,
} from './action.ts';
import {
  AuthorizationStatus,
  DEFAULT_CITY,
  DEFAULT_SORTING,
} from '../consts/const.ts';
import { TOffer } from '../types/TOffer.ts';
import { TComment } from '../types/TComment.ts';
import { TCityName } from '../types/TCityName.ts';
import { TOfferById } from '../types/TOfferById.ts';
import { TSortingType } from '../types/TSortingType.ts';
import { offerById } from '../mocks/offerById.ts';

type InitialState = {
  city: TCityName;
  offers: TOffer[];
  offersByCity: TOffer[];
  offerById: TOfferById;
  offersNearby: TOffer[];
  comments: TComment[];
  sortingType: TSortingType;
  isOffersDataLoaded: boolean;
  isOfferByIdDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  currentOfferId: string;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  offersByCity: [],
  offerById: offerById,
  offersNearby: [],
  comments: [],
  sortingType: DEFAULT_SORTING,
  isOffersDataLoaded: false,
  isOfferByIdDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentOfferId: '',
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
    .addCase(getOfferById, (state, { payload }) => {
      state.offerById = payload;
    })
    .addCase(getOffersNearby, (state, { payload }) => {
      state.offersNearby = payload;
    })
    .addCase(changeCurrentOfferId, (state, { payload }) => {
      state.currentOfferId = payload;
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
    .addCase(getOfferComments, (state, { payload }) => {
      state.comments = payload;
    })
    .addCase(addNewComment, (state, { payload }) => {
      state.comments.push(payload);
    })
    .addCase(requireAuthorization, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(isOffersDataLoaded, (state, { payload }) => {
      state.isOffersDataLoaded = payload;
    })
    .addCase(isOfferByIdDataLoaded, (state, { payload }) => {
      state.isOfferByIdDataLoaded = payload;
    });
});

export { reducer };
