import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../browserHistory/browserHistory.ts';
import { reducer } from '../store/reducer.ts';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'offer/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
