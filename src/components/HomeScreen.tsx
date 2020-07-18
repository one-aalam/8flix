import React from "react";
import styled from "styled-components";
import {
  useNetflixOriginals,
  useTopRated,
  useTrending,
} from "../hooks/useMovieApi";
import { CardList } from "./CardList";

export const HomeScreen = () => (
  <>
    <CardListNetflixOriginal />
    <CardListTopRated />
    <CardListTrending />
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

  return <CardList items={response?.results} />;
};
export const CardListTopRated = () => {
  const { error, loading, response } = useTopRated();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:</p>;
  }

  return <CardList items={response?.results} />;
};
export const CardListTrending = () => {
  const { error, loading, response } = useTrending();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:</p>;
  }

  return <CardList items={response?.results} />;
};
