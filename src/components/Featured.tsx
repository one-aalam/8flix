import React from "react";
import styled from "styled-components";
import { useTVDetail } from "../hooks/useMovieApi";
import { BACKDROP_PATH } from "../config/constants";

interface FeaturedProps {
  id: string;
}

export const Featured: React.FC<FeaturedProps> = ({ id }) => {
  const { error, loading, response } = useTVDetail(id);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:</p>;
  }
  console.log(response);
  return (
    <MovieDetailWrapper backdrop={`${BACKDROP_PATH}${response.backdrop_path}`}>
      <MovieInfoWrapper>
        <div>
          <h1>{response.name}</h1>
          <p>{response.overview}</p>
        </div>
      </MovieInfoWrapper>
    </MovieDetailWrapper>
  );
};

type MovieDetailWrapperProps = {
  backdrop: string;
};

const MovieDetailWrapper = styled.div<MovieDetailWrapperProps>`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
`;
const MovieInfoWrapper = styled.div`
  position: absolute;
  left: 10%;
  top: 20%;
  width: 50%;
  color: white;
  text-align: left;
  display: flex;
`;
