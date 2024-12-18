import OfferCardList from '../OfferCardList/OfferCardList.tsx';
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
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>
              Popular
            </li>
            <li className="places__option" tabIndex={0}>
              Price: low to high
            </li>
            <li className="places__option" tabIndex={0}>
              Price: high to low
            </li>
            <li className="places__option" tabIndex={0}>
              Top rated first
            </li>
          </ul>
        </form>
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
