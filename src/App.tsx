import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch } from './store';
import { loadMovies } from './features/movies/MovieSlice';
import { Route, Routes } from 'react-router-dom';
import MovieList from './features/movies/MovieList';

function App(): JSX.Element {
  return (
    <>
      <div className="top">Топ 250</div>
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
