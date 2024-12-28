import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/const.ts';
import { MainPage, Login, Favorites, Offer, NotFoundPage } from '../../pages';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import Layout from '../Layout/Layout.tsx';
import { offersNearby } from '../../mocks/offers.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import LoadingScreen from '../Spinner/LoadingScreen.tsx';

function App() {
  const isOffersLoaded = useAppSelector((state) => state.isOffersDataLoaded);

  if (!isOffersLoaded) {
    return <LoadingScreen />;
  }

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
