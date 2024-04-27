import { Movie } from './types/Movie';

const apiKey = '';
const apiUrl =
  'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=4&lists=top250';
export const getMovies = async (): Promise<Movie[]> => {
  const response = await fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  });
  const data = await response.json();
  console.log(data.docs);
  return data.docs;
};
