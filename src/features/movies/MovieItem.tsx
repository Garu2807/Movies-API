import { Movie } from './types/Movie';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { addToFavorites } from '../favourites/FavouritesSlice';
export type MovieProps = {
  movie: Movie;
};

function MovieItem({ movie }: MovieProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleAddToFavourites = (movie: Movie): void => {
    dispatch(addToFavorites(movie));
  };
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`/${movie.id}`);
  };
  return (
    <div className="movie_item">
      <div className="movie_info">
        <img
          onClick={handleClick}
          className="movie_img"
          src={movie.poster.previewUrl}
          alt={movie.name}
        />
        <p className="name">{movie.name}</p>
      </div>
      <p className="rating">{movie.rating.imdb}</p>
      <button
        className="addToCart"
        onClick={() => handleAddToFavourites(movie)}
      >
        Добавить в избранное
      </button>
    </div>
  );
}

export default MovieItem;
