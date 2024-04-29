import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch } from './store';
import { loadMovies } from './features/movies/MovieSlice';
import { Route, Routes } from 'react-router-dom';
import MovieList from './features/movies/MovieList';
import MoviePage from './features/movies/MoviePage';
import FavoriteMovies from './features/favourites/FavouritesMovies';
import NavBar from './features/navbar/NavBar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:id" element={<MoviePage />} />
        <Route path="/favourites" element={<FavoriteMovies />} />
        <Route path="/favourites/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
