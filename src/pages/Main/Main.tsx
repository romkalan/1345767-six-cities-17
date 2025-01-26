import CityTabs from '../../components/CityTabs/CityTabs.tsx';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import EmptyCity from '../../components/EmptyCity/EmptyCity.tsx';
import FilledCity from '../../components/FilledCity/FilledCity.tsx';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen.tsx';
import { sortOffers } from '../../store/offersProcess/offersProcess.ts';
import {
  getCurrentSortingType,
  getOffersByCity,
  getOffersLoadedStatus,
} from '../../store/offersProcess/selectors.ts';

function MainPage() {
  const offersByCity = useAppSelector(getOffersByCity);
  const currentSortingType = useAppSelector(getCurrentSortingType);
  const isOffersLoaded = useAppSelector(getOffersLoadedStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortOffers());
  }, [dispatch, currentSortingType, offersByCity, isOffersLoaded]);

  if (!isOffersLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <main
        className={classNames('page__main', 'page__main--index', {
          'page__main--index-empty': !offersByCity.length,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          {offersByCity.length ? <FilledCity /> : <EmptyCity />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
