import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts/const.ts';
import { offersProcess } from './offersProcess/offersProcess.ts';
import { userProcess } from './userProcess/userProcess.ts';
import { commentsProcess } from './commentsProcess/commentsProcess.ts';
import { appProcess } from './appProcess/appProcess.ts';
import { favoriteProcess } from './favoriteProcess/favoriteProcess.ts';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
});
