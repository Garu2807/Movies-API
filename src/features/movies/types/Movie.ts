export type movie_img = {
  url: string;
  previewUrl: string;
};
export type movie_raiting = {
  imdb: string;
};
export type Movie = {
  id: number;
  name: string;
  aleternativeName: string;
  poster: movie_img;
  year: number;
  rating: movie_raiting;
};
export type MovieId = Movie['id'];
