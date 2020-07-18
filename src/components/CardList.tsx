import React from "react";
import styled from "styled-components";
import { ITMDBMovie } from "../interfaces/tmdb";
import { Card } from "./Card";

type CardListProps = {
  items: ITMDBMovie[];
};

export const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <StyledCardList>
      Heading goes here
      <div className="Movie__Strip">
        {items.map((movie: any) => (
          <Card key={movie?.id} movie={movie} />
        ))}
      </div>
    </StyledCardList>
  );
};

const StyledCardList = styled.div`
  width: 90%;
  margin: 0 auto;
  .Movie__Strip {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    .Movie__Card {
      flex: 0 0 auto;
      margin-left: 1rem;
    }
  }
`;
