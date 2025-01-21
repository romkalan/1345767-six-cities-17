import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts/const.ts';
import { offersData } from './offersData/offersData.ts';
import { userData } from './userData/userData.ts';
import { commentsData } from './commentsData/commentsData.ts';

export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
});
