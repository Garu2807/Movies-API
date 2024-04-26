import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './store';
import { loadMovies } from './features/movies/MovieSlice';
import { Route, Routes } from 'react-router-dom';
import MovieList from './features/movies/MovieList';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
    </Routes>
  );
}

export default App;
