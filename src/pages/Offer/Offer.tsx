import { RatingStyle } from '../../consts/const.ts';
import CommentForm from '../../components/CommentForm/CommentForm.tsx';
import OfferGallery from '../../components/OfferGallery/OfferGallery.tsx';
import ReviewsList from '../../components/ReviewsList/ReviewsList.tsx';
import Map from '../../components/Map/Map.tsx';
import OfferCardList from '../../components/OfferCardList/OfferCardList.tsx';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import {
  fetchOfferById,
  fetchOfferComments,
  fetchOffersNearby,
} from '../../store/api-actions.ts';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen.tsx';
import { useParams } from 'react-router-dom';
import { getComments } from '../../store/commentsProcess/selectors.ts';
import {
  getOfferById,
  getOffersByIdLoadedStatus,
  getOffersNearby,
} from '../../store/offersProcess/selectors.ts';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton.tsx';

function Offer(): JSX.Element {
  const dispatch = useAppDispatch();

  const offerById = useAppSelector(getOfferById);
  const isOfferLoaded = useAppSelector(getOffersByIdLoadedStatus);
  const offersNearby = useAppSelector(getOffersNearby);
  const comments = useAppSelector(getComments);

  const { id } = useParams();

  const { images, title, rating, price, goods, id: offerId } = offerById;
  const ratingStyle = RatingStyle(rating);
  const offersNearbyFixedCount = useMemo(
    () => offersNearby.slice(0, 3),
    [offersNearby],
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
      dispatch(fetchOffersNearby(id));
      dispatch(fetchOfferComments(id));
    }
  }, [dispatch, id]);

  if (!isOfferLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={images.slice(0, 6)}></OfferGallery>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <FavoriteButton offerId={offerId} className={'offer'} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: ratingStyle }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src="../../../markup/img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name"> Angelina </span>
                  <span className="offer__user-status"> Pro </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ReviewsList comments={comments} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map activeOffer={offerById} offers={offersNearby} isNearby />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferCardList
              offers={offersNearbyFixedCount}
              setActiveOffer={() => {}}
              isNearbyOffers
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
