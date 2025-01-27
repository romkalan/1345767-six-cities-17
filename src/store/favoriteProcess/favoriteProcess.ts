import { NameSpace } from '../../consts/const.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFavoriteOffersData } from '../../types/TFavoriteOffersData.ts';
import {
  fetchFavoriteOffersAction,
  uploadFavoriteOfferStatus,
} from '../api-actions.ts';
import { TOffer } from '../../types/TOffer.ts';

const initialState: TFavoriteOffersData = {
  offersFavorite: [],
  isFavoriteOffersDataLoaded: false,
  isFavoriteStatus: false,
  isFavoriteOfferUploaded: false,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    getFavoriteOffers: (state, { payload }: PayloadAction<TOffer[]>) => {
      state.offersFavorite = payload;
    },
    getFavoriteStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.isFavoriteStatus = payload;
    },
    saveFavoriteStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.isFavoriteStatus = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoaded = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state) => {
        state.isFavoriteOffersDataLoaded = true;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isFavoriteOffersDataLoaded = false;
      })
      .addCase(uploadFavoriteOfferStatus.pending, (state) => {
        state.isFavoriteOfferUploaded = false;
      })
      .addCase(uploadFavoriteOfferStatus.fulfilled, (state, { payload }) => {
        state.isFavoriteOfferUploaded = true;

        if (payload.isFavorite) {
          state.offersFavorite.push(payload);
        } else {
          const favoriteIndex = state.offersFavorite.findIndex(
            (card) => card.id === payload.id,
          );
          state.offersFavorite.splice(favoriteIndex, 1);
        }
      })
      .addCase(uploadFavoriteOfferStatus.rejected, (state) => {
        state.isFavoriteOfferUploaded = false;
      });
  },
});

export const { getFavoriteOffers, saveFavoriteStatus, getFavoriteStatus } =
  favoriteProcess.actions;
