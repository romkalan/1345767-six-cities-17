import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace } from '../../consts/const.ts';
import { TAppProcessState } from '../../types/TAppProcessState.ts';
import { TCityName } from '../../types/TCityName.ts';

const initialState: TAppProcessState = {
  city: DEFAULT_CITY,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, { payload }: PayloadAction<TCityName>) => {
      state.city = payload;
    },
  },
});

export const { changeCity } = appProcess.actions;
