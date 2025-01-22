import { TState } from '../../types/TState.ts';
import { NameSpace } from '../../consts/const.ts';
import { TOffer } from '../../types/TOffer.ts';
import { TOfferById } from '../../types/TOfferById.ts';
import { TSortingType } from '../../types/TSortingType.ts';
import { TCityName } from '../../types/TCityName.ts';

export const getCurrentCityName = (state: TState): TCityName =>
  state[NameSpace.Offers].city;

export const getOffers = (state: TState): TOffer[] =>
  state[NameSpace.Offers].offers;

export const getOfferById = (state: TState): TOfferById =>
  state[NameSpace.Offers].offerById;

export const getOffersByCity = (state: TState): TOffer[] =>
  state[NameSpace.Offers].offersByCity;

export const getOffersNearby = (state: TState): TOffer[] =>
  state[NameSpace.Offers].offersNearby;

export const getCurrentSortingType = (state: TState): TSortingType =>
  state[NameSpace.Offers].sortingType;

export const getOffersLoadedStatus = (state: TState): boolean =>
  state[NameSpace.Offers].isOffersDataLoaded;

export const getOffersByIdLoadedStatus = (state: TState): boolean =>
  state[NameSpace.Offers].isOfferByIdDataLoaded;
