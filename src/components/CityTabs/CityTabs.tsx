import { Cities } from '../../consts/const.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { memo, useEffect } from 'react';
import { getOffersByCity } from '../../store/offersProcess/offersProcess.ts';
import { getCurrentCityName } from '../../store/appProcess/selectors.ts';
import CityTab from '../CityTab/CityTab.tsx';

function CityTabsTemplate() {
  const currentCity = useAppSelector(getCurrentCityName);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOffersByCity(currentCity));
  }, [dispatch, currentCity]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city) => (
            <CityTab key={city} city={city} />
          ))}
          ;
        </ul>
      </section>
    </div>
  );
}

const CityTabs = memo(CityTabsTemplate);

export default CityTabs;
