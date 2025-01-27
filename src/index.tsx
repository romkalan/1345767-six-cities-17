import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  checkAuthAction,
  fetchFavoriteOffersAction,
  fetchOffersAction,
} from './store/api-actions.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoriteOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
);
