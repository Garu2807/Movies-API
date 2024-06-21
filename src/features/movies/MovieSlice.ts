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
  rating: number;
};

export const loadFilteredMovies = createAsyncThunk(
  'movies/loadFilteredMovies',
  async ({ page, genres, rating }: LoadMoviesByArgs) => {
    const movies = await api.getFilteredMovies(page, genres, rating);
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
        console.log(action.error.message);
      })
      .addCase(loadFilteredMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(loadFilteredMovies.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export default moviesSlice.reducer;
