import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCommentsData } from '../../types/TCommentsData.ts';
import { NameSpace } from '../../consts/const.ts';
import { TComment } from '../../types/TComment.ts';

const initialState: TCommentsData = {
  comments: [],
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
    getOfferComments: (state, { payload }: PayloadAction<TComment[]>) => {
      state.comments = payload;
    },
    addNewComment: (state, { payload }: PayloadAction<TComment>) => {
      state.comments.push(payload);
    },
  },
});

export const { getOfferComments, addNewComment } = commentsProcess.actions;
