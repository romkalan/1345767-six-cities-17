import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/const.ts';
import { MainPage, Login, Favorites, Offer, NotFoundPage } from '../../pages';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import { TOfferById } from '../../types/TOfferById.ts';
import Layout from '../Layout/Layout.tsx';
import { offersNearby } from '../../mocks/offers.ts';
import { TComment } from '../../types/TComment.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useEffect } from 'react';
import { getAllOffers } from '../../store/action.ts';

type AppProps = {
  offerById: TOfferById;
  comments: TComment[];
};

function App({ offerById, comments }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllOffers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites />
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
