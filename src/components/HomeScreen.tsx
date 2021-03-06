import React from "react";
import {
  useNetflixOriginals,
  useTopRated,
  useTrending,
  useMovieDiscoverByGenre,
} from "../hooks/useMovieApi";
import { CardList } from "./CardList";
import { Featured } from "./Featured";

export const HomeScreen = () => (
  <>
    <Featured id="70523" />
    <CardListNetflixOriginal />
    <CardListTopRated />
    <CardListTrending />
    <CardListGenreAction />
  </>
);
export const CardListNetflixOriginal = () => {
  const { error, loading, response } = useNetflixOriginals();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:</p>;
  }

  return (
    <CardList
      heading="8Flix Originals"
      items={response?.results}
      style={"portrait"}
    />
  );
};
export const CardListTopRated = () => {
  const { error, loading, response } = useTopRated();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:</p>;
  }

  return (
    <CardList heading="Top Rated" items={response?.results} style="landscape" />
  );
};
export const CardListTrending = () => {
  const { error, loading, response } = useTrending();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:</p>;
  }

  return (
    <CardList heading="Trending" items={response?.results} style={"portrait"} />
  );
};

export const CardListGenreAction = () => {
  const { error, loading, response } = useMovieDiscoverByGenre("action");
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:</p>;
  }

  return (
    <CardList
      heading="Action Movies"
      items={response?.results}
      style={"landscape"}
    />
  );
};
