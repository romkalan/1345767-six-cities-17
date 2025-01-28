import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { getAuthorizationStatus } from '../../store/userProcess/selectors.ts';
import {
  AppRoute,
  AuthorizationStatus,
  OFFER_CLASS_NAME,
} from '../../consts/const.ts';
import { getFavoriteOfferById } from '../../store/favoriteProcess/selectors.ts';
import { useMemo } from 'react';
import { uploadFavoriteOfferStatus } from '../../store/api-actions.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';

type FavoriteButtonProps = {
  offerId: string;
  className: string;
};

function FavoriteButton({ offerId, className }: FavoriteButtonProps) {
  const iconWidthSize = className === OFFER_CLASS_NAME ? 31 : 18;
  const iconHeightSize = className === OFFER_CLASS_NAME ? 33 : 19;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = useMemo(
    () => authorizationStatus === AuthorizationStatus.Auth,
    [authorizationStatus],
  );
  const isFavorite = useAppSelector((state) =>
    getFavoriteOfferById(state, offerId),
  );

  const favoriteClass =
    isAuth && isFavorite ? ` ${className}__bookmark-button--active` : '';

  const handleFavoriteStatus = () => {
    if (isAuth) {
      dispatch(
        uploadFavoriteOfferStatus({ offerId, favoriteStatus: isFavorite }),
      );
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      onClick={handleFavoriteStatus}
      className={`${className}__bookmark-button ${favoriteClass} button`}
      type="button"
    >
      <svg
        className={`${className}__bookmark-icon`}
        // width="18"
        // height="19"
        width={iconWidthSize}
        height={iconHeightSize}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
