import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { offerById } from './mocks/offerById.ts';
import { Provider } from 'react-redux';
import { store } from './store';
import { getAllComments, getAllOffers } from './store/action.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(getAllOffers());
store.dispatch(getAllComments());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerById={offerById} />
    </Provider>
  </React.StrictMode>,
);
