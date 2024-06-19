import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { Movie, Genre } from './types/Movie';

type MoviesState = {
  movies: Movie[];
};

const initialState: MoviesState = {
  movies: [],
};

export const loadMovies = createAsyncThunk(
  'movies/loadMovies',
  async (page: number) => {
    const movies = await api.getMovies(page);
    return movies;
  }
);

type LoadMoviesByArgs = {
  page: number;
  genres: Genre;
};

export const loadMoviesByGenre = createAsyncThunk(
  'movies/loadMoviesByGenre',
  async ({ page, genres }: LoadMoviesByArgs) => {
    const movies = await api.getMoviesByGenre(page, genres);
    return movies;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(loadMovies.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(loadMoviesByGenre.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(loadMoviesByGenre.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export default moviesSlice.reducer;
