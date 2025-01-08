import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/const.ts';
import { MainPage, Login, Favorites, Offer, NotFoundPage } from '../../pages';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import Layout from '../Layout/Layout.tsx';
import HistoryRouter from '../HistoryRouter/HistoryRouter.tsx';
import browserHistory from '../../browserHistory/browserHistory.ts';

function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer />} />
        </Route>
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
