import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import MoviesState from './types/MoviesState';
const initialState: MoviesState = {
  movies: [],
};
export const loadMovies = createAsyncThunk(
  'movies/loadMovies',
  (page: number) => {
    return api.getMovies(page);
  }
);

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(loadMovies.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});
export default MovieSlice.reducer;
