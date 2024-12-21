import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { SortingTypes } from '../../consts/const.ts';
import classNames from 'classnames';
import { changeSortingType } from '../../store/action.ts';
import { TSortingType } from '../../types/TSortingType.ts';

function PlacesSorting() {
  const currentSortingType = useAppSelector((state) => state.sortingType);
  const dispatch = useDispatch();

  const handleChangeOffersOrder = (item: TSortingType) => {
    dispatch(changeSortingType(item));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SortingTypes.map((sortingType) => (
          <li
            key={sortingType}
            className={classNames('places__option', {
              'places__option--active': currentSortingType === sortingType,
            })}
            tabIndex={0}
            onClick={() => handleChangeOffersOrder(sortingType)}
          >
            {sortingType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
