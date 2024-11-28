import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/const.ts';
import MainPage from '../../pages/Main/Main.tsx';
import Login from '../../pages/Login/Login.tsx';
import Favorites from '../../pages/Favorites/Favorites.tsx';
import Offer from '../../pages/Offer/Offer.tsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.tsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage offersCount={offersCount} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
