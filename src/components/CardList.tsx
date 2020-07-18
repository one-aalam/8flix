import React from "react";
import styled from "styled-components";
import { ITMDBMovie } from "../interfaces/tmdb";
import { Card } from "./Card";

type CardListProps = {
  items: ITMDBMovie[];
  heading?: string;
};

export const CardList: React.FC<CardListProps> = ({ items, heading }) => {
  return (
    <StyledCardList>
      <h3>{heading}</h3>
      <div className="Card__Strip">
        {items.map((movie: any) => (
          <Card key={movie?.id} media={movie} />
        ))}
      </div>
    </StyledCardList>
  );
};

const StyledCardList = styled.div`
  width: 90%;
  margin: 0 auto;
  h3 {
    color: white;
    text-align: left;
    padding-left: 1rem;
  }
  .Card__Strip {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }

    .Card {
      flex: 0 0 auto;
      margin-left: 1rem;
    }
  }
`;
