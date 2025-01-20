import { TOfferById } from './TOfferById.ts';
import { TOffer } from './TOffer.ts';
import { TSortingType } from './TSortingType.ts';
import { TCityName } from './TCityName.ts';

export type TOffersData = {
  city: TCityName;
  offers: TOffer[];
  offersByCity: TOffer[];
  offerById: TOfferById;
  offersNearby: TOffer[];
  isOffersDataLoaded: boolean;
  isOfferByIdDataLoaded: boolean;
  currentOfferId: string;
  sortingType: TSortingType;
};
