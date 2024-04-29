import { Movie } from '../movies/types/Movie';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { removeFromFavorites } from './FavouritesSlice';
export type MovieProps = {
  movie: Movie;
};

function FavouritesItem({ movie }: MovieProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleRemoveToFavourites = (movie: Movie): void => {
    dispatch(removeFromFavorites(movie));
  };
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`/favourites/${movie.id}`);
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
        className="removeToFavourites"
        onClick={() => handleRemoveToFavourites(movie)}
      >
        Удалить из избранного
      </button>
    </div>
  );
}

export default FavouritesItem;
