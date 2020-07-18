import React from "react";
import styled from "styled-components";

import { ITMDBMovie } from "../interfaces/tmdb";
import { POSTER_PATH } from "../config/constants";

type MovieCardProps = {
  movie: ITMDBMovie;
  poster?: string;
  style?: any;
};

type StyledMovieCardProps = {
  poster?: string;
};

export const Card: React.FC<MovieCardProps> = ({ movie, style }) => {
  return (
    <StyledCard
      poster={`${POSTER_PATH}${movie.poster_path}`}
      className="Card"
      style={style}
    >
      <div className="layer__desc">{movie.title}</div>
    </StyledCard>
  );
};

export const StyledCard = styled.div<StyledMovieCardProps>`
  width: 185px;
  height: 278px;
  background: url(${(props) => props.poster}) no-repeat;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1) rotate(2deg);
  }
  .layer__desc,
  .layer__action {
    position: absolute;
    visibility: hidden;
  }
  .layer__desc {
    top: 0;
  }
  .layer__action {
    bottom: 0;
  }
  &:hover .layer__desc {
    visibility: visible;
  }
  &:hover .layer__action {
    visibility: visible;
  }
`;
