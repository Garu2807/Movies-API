import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import MovieItem from './MovieItem';
import { loadMovies } from './MovieSlice';
function MovieList(): JSX.Element {
  const { movies } = useSelector((store: RootState) => store.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadMovies(currentPage));
  }, [currentPage]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const pageButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className="movie_list">
      <div className="top">Топ 250</div>
      <div className="movies">
        {movies.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>

      <div className="pages">
        {pageButtons.map((page) => (
          <button
            className="page_btn"
            key={page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
