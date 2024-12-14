import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/const.ts';
import { MainPage, Login, Favorites, Offer, NotFoundPage } from '../../pages';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import { TOffer } from '../../types/TOffer.ts';
import { TOfferById } from '../../types/TOfferById.ts';
import Layout from '../Layout/Layout.tsx';
import { offersNearby } from '../../mocks/offers.ts';
import { TComment } from '../../types/TComment.ts';

type AppProps = {
  offersCount: number;
  offers: TOffer[];
  offerById: TOfferById;
  comments: TComment[];
};

function App({ offersCount, offers, offerById, comments }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route
            index
            element={<MainPage offersCount={offersCount} offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <Offer
                offersNearby={offersNearby}
                offerById={offerById}
                comments={comments}
                authorisationStatus={AuthorizationStatus.Auth}
              />
            }
          />
        </Route>
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
