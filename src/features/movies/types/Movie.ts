export type movie_img = {
  url: string;
  previewUrl: string;
};
export type movie_raiting = {
  imdb: string;
};
export type Genre = {
  name: string;
};
export type movie_back = {
  url: string;
  previewUrl: string;
};
export type Movie = {
  id: number;
  name: string;
  aleternativeName: string;
  poster: movie_img;
  year: number;
  rating: movie_raiting;
  alternativeName: string;
  description: string;
  ageRating: number;
  genres: Genre[];
  movieLength: number;
  back: movie_back;
};
export type MovieId = Movie['id'];
