import { configureStore } from '@reduxjs/toolkit';
import moviesReducer, { MoviesState } from './moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = {
  movies: MoviesState;
};

export type AppDispatch = typeof store.dispatch;

export default store;
