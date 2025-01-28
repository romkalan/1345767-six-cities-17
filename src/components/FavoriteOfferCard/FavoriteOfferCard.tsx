import { RatingStyle } from '../../consts/const.ts';
import { Link } from 'react-router-dom';
import { TOffer } from '../../types/TOffer.ts';
import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx';

type FavoriteOfferCardProps = {
  offer: TOffer;
};

function FavoriteOfferCard({ offer }: FavoriteOfferCardProps) {
  const { price, rating, title, type, previewImage, id } = offer;
  const ratingStyle = RatingStyle(rating);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offerId={id} className={'place-card'} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingStyle }}></span>
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

export default FavoriteOfferCard;
