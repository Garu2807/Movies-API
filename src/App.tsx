import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch } from './store';
import { loadMovies } from './features/movies/MovieSlice';
import { Route, Routes } from 'react-router-dom';
import MovieList from './features/movies/MovieList';
import MoviePage from './features/movies/MoviePage';
import FavoriteMovies from './features/favourites/FavouritesMovies';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:id" element={<MoviePage />} />
        <Route path="/favourites" element={<FavoriteMovies />} />
      </Routes>
    </>
  );
}

export default App;
