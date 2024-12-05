import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/const.ts';
import { MainPage, Login, Favorites, Offer, NotFoundPage } from '../../pages';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import { TOffer } from '../../types/TOffer.ts';
import { TOfferById } from '../../types/TOfferById.ts';

type AppProps = {
  offersCount: number;
  offers: TOffer[];
  offerById: TOfferById;
};

function App({ offersCount, offers, offerById }: AppProps) {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route
            index
            element={<MainPage offersCount={offersCount} offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites favoriteOffers={favoriteOffers} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer offer={offerById} />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;