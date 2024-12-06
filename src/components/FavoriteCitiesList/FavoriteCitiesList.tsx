import FavoriteOffersCity from '../FavoriteOffersCity/FavoriteOffersCity.tsx';
import { Cities } from '../../consts/const.ts';
import { TOffer } from '../../types/TOffer.ts';
import { groupOffersByCity } from '../../utils/utils.ts';

type FavoriteCitiesListProps = {
  favoriteOffers: TOffer[];
};

function FavoriteCitiesList({ favoriteOffers }: FavoriteCitiesListProps) {
  const citiesList = Cities;
  const groupedFavoriteOffers = groupOffersByCity(favoriteOffers);

  return citiesList.map((city) => (
    <FavoriteOffersCity
      key={city}
      offers={groupedFavoriteOffers[city]}
      city={city}
    />
  ));
}

export default FavoriteCitiesList;
