import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import MovieItem from './MovieItem';
import { loadMovies, loadFilteredMovies } from './MovieSlice';
import usePagination from '../hooks/UsePagination';
import { Range, getTrackBackground } from 'react-range';
import './style.css';
import { Movie } from './types/Movie';

const MIN = 0;
const MAX = 10;

function MovieList(): JSX.Element {
  const { movies } = useSelector((store: RootState) => store.movies);
  const totalPages = 10;
  const dispatch = useAppDispatch();
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [ratingRange, setRatingRange] = useState<number[]>([MIN, MAX]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const {
    currentPage,
    pageNumbers,
    handlePageChange,
    handleNextPage,
    handleFirstPage,
  } = usePagination({ totalPages });

  useEffect(() => {
    const genre = selectedGenre ? { name: selectedGenre } : { name: '' };
    dispatch(
      loadFilteredMovies({ page: currentPage, genres: genre, rating: 0 })
    );
  }, [currentPage, selectedGenre, dispatch]);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const imdbRating = parseFloat(movie.rating.imdb);
      return imdbRating >= ratingRange[0] && imdbRating <= ratingRange[1];
    });
    setFilteredMovies(filtered);
  }, [movies, ratingRange]);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
    handleFirstPage(); // Вернемся на первую страницу при изменении фильтрации
  };

  const handleRatingChange = (values: number[]) => {
    setRatingRange(values);
    handleFirstPage();
  };

  return (
    <div className="movie_list">
      <div className="pages">
        <button
          className="page_btn"
          disabled={currentPage === 1}
          onClick={handleFirstPage}
        >
          В начало
        </button>
        {pageNumbers.map((page) => (
          <button
            className={`page_btn ${page === currentPage ? 'active' : ''}`}
            key={page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="page_btn"
          id="next"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Дальше
        </button>
      </div>
      <div className="filters">
        <div className="genre_filter">
          <label htmlFor="genre">Фильтровать по жанрам:</label>
          <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
            <option value="">Все жанры</option>
            <option value="ужасы">Ужасы</option>
            <option value="драма">Драма</option>
            <option value="комедия">Комедия</option>
            <option value="мелодрама">Мелодрама</option>
          </select>
        </div>
        <div className="rating_filter">
          <label htmlFor="ratingRange">Диапазон рейтингов:</label>
          <Range
            values={ratingRange}
            step={0.4}
            min={MIN}
            max={MAX}
            onChange={handleRatingChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '6px',
                  width: '100%',
                  background: getTrackBackground({
                    values: ratingRange,
                    colors: ['#ccc', '#548BF4', '#ccc'],
                    min: MIN,
                    max: MAX,
                  }),
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '20px',
                  width: '20px',
                  backgroundColor: '#548BF4',
                }}
              />
            )}
          />
          <div className="range-labels">
            <span>{ratingRange[0]}</span>
            <span>{ratingRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="movies">
        {Array.isArray(filteredMovies) && filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </div>
  );
}

export default MovieList;
