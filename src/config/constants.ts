import { queryParams } from "../interfaces/tmdb";
export const API_KEY = "4764c1a796c41340ca96274a820920c2";

export const BASE_URI = "https://api.themoviedb.org/3";
export const POSTER_PATH = "https://image.tmdb.org/t/p/w185"; //  w92, w154, w185, w342, w500, w780, original
export const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"; // w300, w780, w1280, original
// logo_sizes: w45, w92, w154, w185, w300, w500, original
// profile_sizes: w45, w185, h632, original
// still_sizes: w92, w185, w300, original

export const requiredQueryParams: queryParams = {
  api_key: API_KEY,
};

export const defaultQueryParams: queryParams = {
  primary_release_year: 2020,
};
