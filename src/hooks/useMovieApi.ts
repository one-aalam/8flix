import { stringify } from "query-string";
import { useFetch, IFetchResponse } from "./useFetch";
import { queryParams } from "../interfaces/tmdb";
import {
  BASE_URI,
  API_KEY,
  requiredQueryParams,
  defaultQueryParams,
} from "../config/constants";

// https://www.themoviedb.org/documentation/api
export const useMovieDetail = (id?: string): IFetchResponse =>
  useFetch(`${BASE_URI}/movie/${id}?api_key=${API_KEY}`, {});
export const useTVDetail = (id?: string): IFetchResponse =>
  useFetch(`${BASE_URI}/tv/${id}?api_key=${API_KEY}`, {});
// https://developers.themoviedb.org/3/discover/movie-discover
export const useTrending = (params?: any): IFetchResponse =>
  useFetch(
    `${BASE_URI}/trending/all/week?${stringify({
      ...requiredQueryParams,
      language: "en-US",
    })}`,
    {}
  );

export const useMovieDiscover = (
  params: queryParams = defaultQueryParams
): IFetchResponse =>
  useFetch(
    `${BASE_URI}/discover/movie?${stringify({
      ...requiredQueryParams,
      ...params,
    })}`,
    {}
  );

// @TODO: Port the APIs
const apis = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default apis;
