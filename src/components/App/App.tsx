import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/const.ts';
import { MainPage, Login, Favorites, Offer, NotFoundPage } from '../../pages';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage offersCount={offersCount} />} />
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
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
