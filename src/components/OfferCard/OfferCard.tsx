import { RatingStyle } from '../../consts/const.ts';
import { TOffer } from '../../types/TOffer.ts';
import { Link } from 'react-router-dom';
import { memo, useCallback } from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx';

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
  const { isPremium, type, title, previewImage, price, rating, id } = offer;

  const ratingStyle = { width: RatingStyle(rating) };

  const cardClassWrapper = isNearbyOffer ? 'near-places' : 'cities';
  const cardClassWrapperForImage = isNearbyOffer
    ? 'near-places__image'
    : 'cities__image';

  const handleCardOver = useCallback(() => {
    setCurrentCard(offer);
  }, [setCurrentCard, offer]);

  const handleCardLeave = useCallback(() => {
    setCurrentCard(undefined);
  }, [setCurrentCard]);

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
          <FavoriteButton offerId={id} className={'place-card'} />
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
