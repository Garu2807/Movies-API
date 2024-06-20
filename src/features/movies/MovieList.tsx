import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import MovieItem from './MovieItem';
import { loadMovies, loadFilteredMovies } from './MovieSlice';
import usePagination from '../hooks/UsePagination';
import './style.css';

function MovieList(): JSX.Element {
  const { movies } = useSelector((store: RootState) => store.movies);
  const totalPages = 10;
  const dispatch = useAppDispatch();
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const {
    currentPage,
    pageNumbers,
    handlePageChange,
    handleNextPage,
    handleFirstPage,
  } = usePagination({ totalPages });

  useEffect(() => {
    const genre = selectedGenre ? { name: selectedGenre } : { name: '' };
    dispatch(loadFilteredMovies({ page: currentPage, genres: genre, rating }));
  }, [currentPage, selectedGenre, rating, dispatch]);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
    handleFirstPage(); // Вернемся на первую страницу при изменении фильтрации
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
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
        <label htmlFor="genre">Фильтровать по жанрам:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">Все жанры</option>
          <option value="ужасы">Ужасы</option>
          <option value="драма">Драма</option>
          <option value="комедия">Комедия</option>
          <option value="мелодрама">Мелодрама</option>
          {/* Добавьте другие жанры по мере необходимости */}
        </select>
        <div className="rating-filters">
          <label htmlFor="rating">Рейтинг:</label>
          <input
            type="range"
            id="rating"
            min="0"
            max="10"
            step="0.1"
            value={rating}
            onChange={handleRatingChange}
          />
          <span>{rating}</span>
        </div>
      </div>
      <div className="movies">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </div>
  );
}

export default MovieList;
