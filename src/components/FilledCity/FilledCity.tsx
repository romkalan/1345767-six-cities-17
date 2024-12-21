import OfferCardList from '../OfferCardList/OfferCardList.tsx';
import PlacesSorting from '../PlacesSorting/PlacesSorting.tsx';
import Map from '../Map/Map.tsx';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useState } from 'react';
import { TOffer } from '../../types/TOffer.ts';

function FilledCity() {
  const city = useAppSelector((state) => state.city);
  const offersByCity = useAppSelector((state) => state.offersByCity);

  const [activeOffer, setActiveOffer] = useState<TOffer>();

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offersByCity.length} places to stay in {city}
        </b>
        <PlacesSorting />
        <OfferCardList
          offers={offersByCity}
          setActiveOffer={setActiveOffer}
          isNearbyOffers={false}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map activeOffer={activeOffer} offers={offersByCity} />
        </section>
      </div>
    </div>
  );
}

export default FilledCity;
