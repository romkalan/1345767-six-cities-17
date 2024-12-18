import { TCityName } from '../../types/TCityName.ts';
import { TOffer } from '../../types/TOffer.ts';
import FavoriteOfferCard from '../FavoriteOfferCard/FavoriteOfferCard.tsx';

type FavoriteOffersCityProps = {
  offers: TOffer[];
  city: TCityName;
};

function FavoriteOffersCity({ offers, city }: FavoriteOffersCityProps) {
  if (!offers?.length) {
    return null;
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers?.map((offer) => (
          <FavoriteOfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}

export default FavoriteOffersCity;
