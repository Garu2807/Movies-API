import { Movie } from './types/Movie';
import './style.css';
export type MovieProps = {
  movie: Movie;
};

function MovieItem({ movie }: MovieProps): JSX.Element {
  return (
    <div className="movie_item">
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
