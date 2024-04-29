import { Movie } from '../movies/types/Movie';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
export type MovieProps = {
  movie: Movie;
};

function FavouritesItem({ movie }: MovieProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`/${movie.id}`);
  };
  return (
    <div className="movie_item" onClick={handleClick}>
      <div className="movie_info">
        <img
          className="movie_img"
          src={movie.poster.previewUrl}
          alt={movie.name}
        />
        <p className="name">{movie.name}</p>
      </div>
      <p className="rating">{movie.rating.imdb}</p>
    </div>
  );
}

export default FavouritesItem;
