import { TState } from '../../types/TState.ts';
import { NameSpace } from '../../consts/const.ts';
import { TOffer } from '../../types/TOffer.ts';

export const getFavoriteOffers = (state: TState): TOffer[] =>
  state[NameSpace.Favorite].offersFavorite;

export const getFavoriteOfferById = (state: TState, offerId: string) => {
  const offers = state[NameSpace.Favorite];
  return offers.offersFavorite.findIndex((card) => card.id === offerId) !== -1;
};
