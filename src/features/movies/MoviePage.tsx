import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';

function MoviePage(): JSX.Element {
  const navigate = useNavigate();
  const { movies } = useSelector((store: RootState) => store.movies);
  const { id } = useParams();
  const oneMovie = movies.find((movie) => movie.id === Number(id));
  const handleBackClick = (): void => {
    navigate(-1);
  };
  const movieHtml: ReactNode = oneMovie ? (
    <>
      <h4>{oneMovie.name}</h4>
      <img src={oneMovie.poster.previewUrl}></img>
      <button onClick={handleBackClick}>Назад</button>{' '}
    </>
  ) : (
    <>
      <h3>Такой фильма нет</h3>
      <button onClick={handleBackClick}>Назад</button>{' '}
    </>
  );
  return <div>{movieHtml}</div>;
}

export default MoviePage;
