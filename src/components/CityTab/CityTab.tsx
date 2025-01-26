import { AppRoute, DEFAULT_SORTING } from '../../consts/const.ts';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { TCityName } from '../../types/TCityName.ts';
import { changeCity } from '../../store/appProcess/appProcess.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { getCurrentCityName } from '../../store/appProcess/selectors.ts';
import { changeSortingType } from '../../store/offersProcess/offersProcess.ts';

export interface CityTabProps {
  city: TCityName;
}

function CityTab({ city }: CityTabProps) {
  const currentCity = useAppSelector(getCurrentCityName);
  const dispatch = useAppDispatch();

  const handleChooseCity = (item: TCityName) => {
    dispatch(changeSortingType(DEFAULT_SORTING));
    dispatch(changeCity(item));
  };

  return (
    <li className="locations__item" onClick={() => handleChooseCity(city)}>
      <Link
        className={classNames('locations__item-link', 'tabs__item', {
          'tabs__item--active': currentCity === city,
        })}
        to={AppRoute.Root}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityTab;
