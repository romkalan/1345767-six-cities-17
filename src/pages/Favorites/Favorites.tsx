import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts/const.ts';
import FavoriteCitiesList from '../../components/FavoriteCitiesList/FavoriteCitiesList.tsx';
import FavoriteEmpty from '../../components/FavoritesEmpty/FavoriteEmpty.tsx';
import { TOffer } from '../../types/TOffer.ts';

type FavoriteProps = {
  offers: TOffer[];
};

function Favorites({ offers }: FavoriteProps) {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  switch (favoriteOffers.length) {
    case 0:
      return <FavoriteEmpty />;
    default:
      return (
        <div className="page">
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  <FavoriteCitiesList favoriteOffers={favoriteOffers} />
                </ul>
              </section>
            </div>
          </main>
          <footer className="footer container">
            <Link className="footer__logo-link" to={AppRoute.Root}>
              <img
                className="footer__logo"
                src="../../../markup/img/logo.svg"
                alt="6 cities logo"
                width="64"
                height="33"
              />
            </Link>
          </footer>
        </div>
      );
  }
}

export default Favorites;
