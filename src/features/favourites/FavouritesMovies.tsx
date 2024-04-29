import React from 'react';
import MovieItem from '../movies/MovieItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import FavouritesItem from './FavouritesItem';

export default function FavoriteMovies(): JSX.Element {
  const { favourites } = useSelector((store: RootState) => store.favourites);

  return (
    <div className="movie_list">
      <div className="top">Избранное</div>
      <div className="movies">
        {favourites.length > 0 ? (
          favourites.map((movie) => (
            <FavouritesItem movie={movie} key={movie.id} />
          ))
        ) : (
          <p>No favourite movies yet!</p>
        )}
      </div>
    </div>
  );
}
