// src/redux/slices/newsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  news: any[];
}

const initialState: NewsState = {
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<any[]>) => {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
