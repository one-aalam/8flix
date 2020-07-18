import { stringify } from "query-string";
import { useFetch, IFetchResponse } from "./useFetch";
import { queryParams, genres } from "../interfaces/tmdb";
import {
  BASE_URI,
  API_KEY,
  requiredQueryParams,
  defaultQueryParams,
  MOVIE_GENRES,
} from "../config/constants";

// https://www.themoviedb.org/documentation/api
export const useMovieDetail = (id?: string): IFetchResponse =>
  useFetch(`${BASE_URI}/movie/${id}?api_key=${API_KEY}`, {});
export const useTVDetail = (id?: string): IFetchResponse =>
  useFetch(`${BASE_URI}/tv/${id}?api_key=${API_KEY}`, {});

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

export const useTVDiscover = (
  params: queryParams = defaultQueryParams
): IFetchResponse =>
  useFetch(
    `${BASE_URI}/discover/tv?${stringify({
      ...requiredQueryParams,
      ...params,
    })}`,
    {}
  );

export const useTrending = (params?: any): IFetchResponse =>
  useFetch(
    `${BASE_URI}/trending/all/week?${stringify({
      ...params,
      ...requiredQueryParams,
      language: "en-US",
    })}`,
    {}
  );
export const useTopRated = (params?: any): IFetchResponse =>
  useFetch(
    `${BASE_URI}/movie/top_rated?${stringify({
      ...params,
      ...requiredQueryParams,
      language: "en-US",
    })}`,
    {}
  );

export const useNetflixOriginals = (
  params: queryParams = defaultQueryParams
): IFetchResponse =>
  useTVDiscover({
    ...params,
    with_networks: 213,
  });

export const useMovieDiscoverByGenre = (
  genre: genres,
  params?: queryParams
): IFetchResponse =>
  useMovieDiscover({
    ...params,
    with_genres: MOVIE_GENRES[genre] || MOVIE_GENRES.action,
  });

// useMovieDiscoverByGenre("action");
