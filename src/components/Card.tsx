import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import getMovieTraileByName from "movie-trailer";

import { ITMDBMovie } from "../interfaces/tmdb";
import { POSTER_PATH } from "../config/constants";

type CardProps = {
  media: ITMDBMovie;
  poster?: string;
  style?: any;
};

type StyledMediaCardProps = {
  poster?: string;
};

export const Card: React.FC<CardProps> = ({ media, style }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  return (
    <StyledCard
      poster={`${POSTER_PATH}${media.poster_path}`}
      className="Card"
      style={style}
      onClick={() => {
        console.log(media);
        getMovieTraileByName(media.name || media.title)
          .then((url: string) => {
            console.log(url);
            setTrailerUrl(url);
          })
          .catch(console.error);
      }}
    >
      {trailerUrl ? (
        <div className="Trailer__Wrapper" onClick={() => setTrailerUrl("")}>
          <ReactPlayer url={trailerUrl} />
        </div>
      ) : null}

      <div className="layer__desc">{media.title}</div>
    </StyledCard>
  );
};

export const StyledCard = styled.div<StyledMediaCardProps>`
  width: 185px;
  height: 278px;
  background: url(${(props) => props.poster}) no-repeat;
  transition: all 0.5s ease;
  .Trailer__Wrapper {
    overflow: hidden;
    div {
      width: 100%;
    }
  }
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
  cursor: pointer;
`;
