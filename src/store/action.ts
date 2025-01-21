import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../consts/const.ts';

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
