// src/redux/slices/tuyendungSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tuyendung } from '../../type/tuyendung';

interface TuyendungState {
  data: tuyendung[];
}

const initialState: TuyendungState = {
  data: [],
};

const tuyendungSlice = createSlice({
  name: 'tuyendung',
  initialState,
  reducers: {
    setTuyendungData: (state, action: PayloadAction<tuyendung[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setTuyendungData } = tuyendungSlice.actions;
export default tuyendungSlice.reducer;
