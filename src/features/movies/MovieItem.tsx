import { Movie } from './types/Movie';
import './style.css';
import { useNavigate } from 'react-router-dom';
export type MovieProps = {
  movie: Movie;
};

function MovieItem({ movie }: MovieProps): JSX.Element {
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

export default MovieItem;
