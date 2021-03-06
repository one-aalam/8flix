import { queryParams } from "../interfaces/tmdb";
export const API_KEY = "4764c1a796c41340ca96274a820920c2";

export const BASE_URI = "https://api.themoviedb.org/3";
export const POSTER_PATH = "https://image.tmdb.org/t/p/w185"; //  w92, w154, w185, w342, w500, w780, original
export const BACKDROP_PATH = "https://image.tmdb.org/t/p/w300"; // w300, w780, w1280, original
export const LOGO_PATH = "https://image.tmdb.org/t/p/w45";
// logo_sizes: w45, w92, w154, w185, w300, w500, original
// profile_sizes: w45, w185, h632, original
// still_sizes: w92, w185, w300, original

export const requiredQueryParams: queryParams = {
  api_key: API_KEY,
};

export const defaultQueryParams: queryParams = {
  primary_release_year: 2020,
};

export const MOVIE_GENRES = {
  action: 28,
  comedy: 35,
  horror: 27,
  romance: 10749,
  documentary: 99,
};
