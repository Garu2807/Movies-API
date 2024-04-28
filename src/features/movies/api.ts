import { Movie } from './types/Movie';

const apiKey = '3VAWCKF-D594395-JNPEPYC-E5EG1VR';
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
