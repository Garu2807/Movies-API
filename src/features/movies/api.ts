import { Movie } from './types/Movie';

const apiKey = 'M4XR0MZ-20W4K5Q-NTSS050-QB7DC15';
const baseUrl = 'https://api.kinopoisk.dev';

export const getMovies = async (page: number = 1): Promise<Movie[]> => {
  const response = await fetch(
    `${baseUrl}/v1.4/movie?page=${page}&limit=4&lists=top250`,
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
