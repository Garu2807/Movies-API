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
    <div className="film_info">
      <img src={oneMovie.poster.previewUrl}></img>
      <h2 className="movie_name">{`${oneMovie.name} (${oneMovie.alternativeName})`}</h2>
      <div className="main_info">
        <h3>
          {` ${oneMovie.year}, ${oneMovie.genres.map((el) => el.name)} ${oneMovie.movieLength} мин   ${oneMovie.ageRating}+`}
        </h3>

        <p
          className="
alternativeName
"
        ></p>
      </div>
      <div className="descr">
        <p className="">{oneMovie.description}</p>
      </div>
      <div className="rating_info"></div>
      <button onClick={handleBackClick}>Назад</button>{' '}
    </div>
  ) : (
    <>
      <h3>Такой фильма нет</h3>
      <button onClick={handleBackClick}>Назад</button>{' '}
    </>
  );
  return <div>{movieHtml}</div>;
}

export default MoviePage;
