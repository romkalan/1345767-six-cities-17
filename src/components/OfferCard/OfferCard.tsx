import { RatingStyle } from '../../consts/const.ts';
import { TOffer } from '../../types/TOffer.ts';
import { Link } from 'react-router-dom';
import { memo, useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { changeFavoriteStatus } from '../../store/api-actions.ts';

type OfferCardProps = {
  offer: TOffer;
  setCurrentCard: (offer: TOffer | undefined) => void;
  isNearbyOffer: boolean;
};

function OfferCardTemplate({
  offer,
  setCurrentCard,
  isNearbyOffer,
}: OfferCardProps) {
  const {
    isFavorite,
    isPremium,
    type,
    title,
    previewImage,
    price,
    rating,
    id,
  } = offer;

  const dispatch = useAppDispatch();

  const ratingStyle = { width: RatingStyle(rating) };
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(isFavorite);
  const favoriteClass =
    favoriteStatus && ' place-card__bookmark-button--active';

  const cardClassWrapper = isNearbyOffer ? 'near-places' : 'cities';
  const cardClassWrapperForImage = isNearbyOffer
    ? 'near-places__image'
    : 'cities__image';

  const handleCardOver = useCallback(() => {
    setCurrentCard(offer);
  }, [offer]);

  const handleCardLeave = useCallback(() => {
    setCurrentCard(undefined);
  }, []);

  const handleFavoriteStatus = () => {
    dispatch(
      changeFavoriteStatus({
        offerId: id,
        isFavoriteStatus: !favoriteStatus,
      }),
    );
    setFavoriteStatus(!favoriteStatus);
  };

  return (
    <article
      className={`${cardClassWrapper}__card place-card`}
      onMouseOver={handleCardOver}
      onMouseLeave={handleCardLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${cardClassWrapperForImage}-wrapper place-card__image-wrapper`}
      >
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleFavoriteStatus}
            className={`place-card__bookmark-button ${favoriteClass} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
const OfferCard = memo(OfferCardTemplate);

export default OfferCard;
