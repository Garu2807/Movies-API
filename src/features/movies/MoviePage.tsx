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
      <div className="photo">
        <img src={oneMovie.poster.previewUrl}></img>
      </div>

      <div className="main_info">
        <h1 className="movie_name">{`${oneMovie.name} (${oneMovie.alternativeName})`}</h1>
        {/* {
          <h3>
            {` ${oneMovie.rating.imdb} ${oneMovie.year}  ${oneMovie.genres.map((el) => el.name)} ${oneMovie.countries.map((el) => el.name)} ${oneMovie.movieLength} мин   ${oneMovie.ageRating}+`}
          </h3>
        } */}
        <div className="line_info">
          <h3 className="movie_imdb">{oneMovie.rating.imdb}</h3>
          <h3>{oneMovie.year}</h3>
          <h3>{`${oneMovie.genres.map((el) => el.name)[0]}`}</h3>
          <h3>{oneMovie.countries.map((el) => el.name)[0]}</h3>
          <h3>{`${oneMovie.movieLength}мин`}</h3>
          <h3>{`${oneMovie.ageRating}+`}</h3>
        </div>
        <p
          className="
alternativeName
"
        ></p>
        <div className="descr">
          <p className="">{oneMovie.description}</p>
        </div>
        <button onClick={handleBackClick}>Назад</button>{' '}
      </div>
    </div>
  ) : (
    <>
      <h3>Такой фильма нет</h3>
      <button onClick={handleBackClick}>Назад</button>{' '}
    </>
  );
  return <div className="movie_pages">{movieHtml}</div>;
}

export default MoviePage;
