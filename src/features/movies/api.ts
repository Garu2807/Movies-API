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

  if (response.status === 403) {
    throw new Error('Access denied. Please check your API key.');
  }

  const data = await response.json();
  console.log('getMovies response:', data);
  return data.docs;
};

export const getMovieById = async (id: number): Promise<Movie | null> => {
  const response = await fetch(`${baseUrl}/v1.4/movie/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  });

  if (response.status === 403) {
    throw new Error('Access denied. Please check your API key.');
  }

  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  console.log('getMovieById response:', data);
  return data;
};

export const getFilteredMovies = async (
  page: number = 1,
  genres: Genre,
  rating: number
): Promise<Movie[]> => {
  let url = `${baseUrl}/v1.4/movie?page=${page}&limit=50&lists=top250`;
  if (genres.name) {
    url += `&genres.name=${genres.name}`;
  }
  if (rating > 0) {
    url += `&rating.imdb=${rating}`;
  }

  console.log('Request URL:', url);

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  });

  if (response.status === 403) {
    throw new Error('Access denied. Please check your API key.');
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('getFilteredMovies response:', data);
  return data.docs;
};
//