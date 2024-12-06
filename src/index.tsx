import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { offers } from './mocks/offers.ts';
import { offerById } from './mocks/offerById.ts';
import { Settings } from './consts/const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Settings.OffersCount}
      offers={offers}
      offerById={offerById}
    />
  </React.StrictMode>,
);
