import { Link } from 'react-router-dom';
import { AppRoute, Cities, DEFAULT_SORTING } from '../../consts/const.ts';
import classNames from 'classnames';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { TCityName } from '../../types/TCityName.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useEffect } from 'react';
import {
  changeCity,
  changeSortingType,
  getOffersByCity,
} from '../../store/offersData/offersData.ts';

function CityTabs() {
  const currentCity = useAppSelector((state) => state.OFFER.city);

  const dispatch = useAppDispatch();

  const handleChooseCity = (item: TCityName) => {
    dispatch(changeSortingType(DEFAULT_SORTING));
    dispatch(changeCity(item));
  };

  useEffect(() => {
    dispatch(getOffersByCity(currentCity));
  }, [dispatch, currentCity]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city) => (
            <li
              key={city}
              className="locations__item"
              onClick={() => handleChooseCity(city)}
            >
              <Link
                className={classNames('locations__item-link', 'tabs__item', {
                  'tabs__item--active': currentCity === city,
                })}
                to={AppRoute.Root}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
