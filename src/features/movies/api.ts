import { Genre, Movie } from './types/Movie';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.kinopoisk.dev';

if (!apiKey) {
  throw new Error('API key is missing');
}

export const getMovies = async (page: number = 1): Promise<Movie[]> => {
  const response = await fetch(
    `${baseUrl}/v1.4/movie?page=${page}&limit=50&lists=top250`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
    }
  );
  const data = await response.json();
  console.log(data.docs);
  return data.docs;
};

export const getMovieById = async (id: number): Promise<Movie | null> => {
  const response = await fetch(`${baseUrl}/v1.4/movie/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  });
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
};
export const getMoviesByGenre = async (
  page: number = 1,
  genres: Genre
): Promise<Movie[]> => {
  const response = await fetch(
    `${baseUrl}/v1.4/movie?page=${page}&limit=50&genres.name=${genres.name}&lists=top250`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
    }
  );
  const data = await response.json();
  console.log(data.docs);
  return data.docs;
};
