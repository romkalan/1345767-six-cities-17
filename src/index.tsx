import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { offerById } from './mocks/offerById.ts';
import { comments } from './mocks/comments.ts';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerById={offerById} comments={comments} />
    </Provider>
  </React.StrictMode>,
);
