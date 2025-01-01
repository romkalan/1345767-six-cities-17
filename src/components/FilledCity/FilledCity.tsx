import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import OfferCardList from '../OfferCardList/OfferCardList.tsx';
import PlacesSorting from '../PlacesSorting/PlacesSorting.tsx';
import Map from '../Map/Map.tsx';
import { useEffect, useState } from 'react';
import { TOffer } from '../../types/TOffer.ts';
import {
  changeCurrentOfferId,
  isOfferByIdDataLoaded,
} from '../../store/action.ts';

function FilledCity() {
  const city = useAppSelector((state) => state.city);
  const offersByCity = useAppSelector((state) => state.offersByCity);
  const dispatch = useAppDispatch();

  const [activeOffer, setActiveOffer] = useState<TOffer>();

  useEffect(() => {
    if (activeOffer) {
      dispatch(changeCurrentOfferId(activeOffer.id));
      dispatch(isOfferByIdDataLoaded(false));
    }
  }, [dispatch, activeOffer]);

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
