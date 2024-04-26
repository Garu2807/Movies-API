import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import MovieItem from './MovieItem';
function MovieList(): JSX.Element {
  const { movies } = useSelector((store: RootState) => store.movies);

  return (
    <div className="movie_list">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
