import { TOfferById } from './TOfferById.ts';
import { TOffer } from './TOffer.ts';
import { TSortingType } from './TSortingType.ts';

export type TOffersData = {
  offers: TOffer[];
  offersByCity: TOffer[];
  offerById: TOfferById;
  offersNearby: TOffer[];
  offersFavorite: TOffer[];
  isOffersDataLoaded: boolean;
  isOfferByIdDataLoaded: boolean;
  currentOfferId: string;
  sortingType: TSortingType;
  isFavoriteStatus: boolean;
};
