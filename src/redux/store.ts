// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import dataReducer from './slices/dataSlice';
import tuyendungReducer from './slices/tuyendungSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    data: dataReducer,
    tuyendung: tuyendungReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
