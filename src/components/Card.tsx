import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import getMovieTraileByName from "movie-trailer";

import { ITMDBMovie } from "../interfaces/tmdb";
import { POSTER_PATH, BACKDROP_PATH } from "../config/constants";

type CardProps = {
  media: ITMDBMovie;
  poster?: boolean;
  style?: any;
};

type StyledMediaCardProps = {
  imgUrl?: string;
  isPoster?: boolean;
};

export const Card: React.FC<CardProps> = ({ media, style, poster }) => {
  const [isOver, setIsOver] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  return (
    <StyledCard
      imgUrl={
        poster
          ? `${POSTER_PATH}${media.poster_path}`
          : `${BACKDROP_PATH}${media.backdrop_path}`
      }
      isPoster={poster}
      className="Card"
      style={style}
      onMouseEnter={() => {
        setIsOver(true);
        console.log(media);
        getMovieTraileByName(media.name || media.title)
          .then((url: string) => {
            console.log(url);
            setTrailerUrl(url);
          })
          .catch(console.error);
      }}
      onMouseLeave={() => {
        setIsOver(false);
        setTrailerUrl("");
      }}
    >
      {trailerUrl ? (
        <ReactPlayer
          url={trailerUrl}
          playing={true}
          wrapper={StyledReactPlayer}
        />
      ) : null}
      <div className="layer__desc">{media.title}</div>
    </StyledCard>
  );
};

export const StyledReactPlayer = styled.div`
  width: 100%;
`;

export const StyledCard = styled.div<StyledMediaCardProps>`
  width: ${(props) => (props.isPoster ? "185px" : "300px")};
  height: ${(props) => (props.isPoster ? "278px" : "169px")};
  background: url(${(props) => props.imgUrl}) no-repeat;
  border-radius: 5px;
  transition: all 0.5s ease;
  div {
    width: 100%;
  }
  .Trailer__Wrapper {
    overflow: hidden;
    div {
      width: 100%;
    }
  }
  &:hover {
    transform: scale(1.5);
    border-radius: 5px;
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
