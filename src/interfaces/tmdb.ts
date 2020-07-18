export interface ITMDBMovie {
  id: number;
  title: string;
  name: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  logo_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  adult: boolean;
  video: boolean;
}

export interface ITMDBMovieGenre {
  id: number;
  name: string;
}

export interface ITMDBMovieDetail extends ITMDBMovie {
  imdb_id: string;
  runtime: number;
  status: string;
  tagline: string;
  homepage: string;
  belongs_to_collection: number;
  budget: number;
  revenue: number;
  genres: ITMDBMovieGenre[];
}

export interface ITMDBDiscovery {
  page: number;
  total_pages: number;
  total_results: number;
  results: ITMDBMovie[];
}

export type queryParams = {
  with_genres?: number | string | string[];
  with_networks?: number | string | string[];
  page?: number | string | string[];
  sort_by?: number | string | string[];
  api_key?: string;
  primary_release_year?: number | string | string[];
};

export type genres = "action" | "comedy" | "horror" | "romance" | "documentary";
