import { TOffer } from './TOffer.ts';

export type TFavoriteOffersData = {
  offersFavorite: TOffer[];
  isFavoriteOffersDataLoaded: boolean;
  isFavoriteStatus: boolean;
  isFavoriteOfferUploaded: boolean;
};
