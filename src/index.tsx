import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
