import CityTabs from '../../components/CityTabs/CityTabs.tsx';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import EmptyCity from '../../components/EmptyCity/EmptyCity.tsx';
import FilledCity from '../../components/FilledCity/FilledCity.tsx';
import classNames from 'classnames';

function MainPage() {
  const offersByCity = useAppSelector((state) => state.offersByCity);

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
