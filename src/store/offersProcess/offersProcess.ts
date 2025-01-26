import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_SORTING, NameSpace } from '../../consts/const.ts';
import { TOffersData } from '../../types/TOffersData.ts';
import { TOfferById } from '../../types/TOfferById.ts';
import { TOffer } from '../../types/TOffer.ts';
import { TCityName } from '../../types/TCityName.ts';
import { fetchOfferById, fetchOffersAction } from '../api-actions.ts';
import { TSortingType } from '../../types/TSortingType.ts';

const initialState: TOffersData = {
  offers: [],
  offersByCity: [],
  offerById: {} as TOfferById,
  offersNearby: [],
  isOffersDataLoaded: false,
  isOfferByIdDataLoaded: false,
  currentOfferId: '',
  sortingType: DEFAULT_SORTING,
  isFavoriteStatus: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    getAllOffers: (state, { payload }: PayloadAction<TOffer[]>) => {
      state.offers = payload;
    },
    getOffersByCity: (state, { payload }: PayloadAction<TCityName>) => {
      state.offersByCity = state.offers.filter(
        (offer) => offer.city.name === payload,
      );
    },
    getOfferById: (state, { payload }: PayloadAction<TOfferById>) => {
      state.offerById = payload;
    },
    getOffersNearby: (state, { payload }: PayloadAction<TOffer[]>) => {
      state.offersNearby = payload;
    },
    changeCurrentOfferId: (state, { payload }: PayloadAction<string>) => {
      state.currentOfferId = payload;
    },
    changeSortingType: (state, { payload }: PayloadAction<TSortingType>) => {
      state.sortingType = payload;
    },
    sortOffers: (state) => {
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
    },
    saveFavoriteStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.isFavoriteStatus = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state) => {
        state.isOffersDataLoaded = true;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoaded = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoaded = false;
      })
      .addCase(fetchOfferById.fulfilled, (state) => {
        state.isOfferByIdDataLoaded = true;
      })
      .addCase(fetchOfferById.pending, (state) => {
        state.isOfferByIdDataLoaded = false;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.isOfferByIdDataLoaded = false;
      });
  },
});

export const {
  getAllOffers,
  getOffersByCity,
  getOfferById,
  getOffersNearby,
  changeCurrentOfferId,
  sortOffers,
  saveFavoriteStatus,
  changeSortingType,
} = offersProcess.actions;
