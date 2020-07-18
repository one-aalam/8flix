import React from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { ITMDBMovie } from "../interfaces/tmdb";
import { Card } from "./Card";

type CardListProps = {
  items: ITMDBMovie[];
  heading?: string;
  style: "landscape" | "portrait";
};

const Arrow = ({ text, className }: { text: string; className: string }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

export const CardList: React.FC<CardListProps> = ({
  items,
  heading,
  style,
}) => {
  const List = (items: ITMDBMovie[], selected?: ITMDBMovie) =>
    items.map((movie: any) => (
      <Card
        key={movie?.id}
        media={movie}
        poster={style === "portrait" ? true : false}
      />
    ));

  return (
    <StyledCardList>
      <h3>{heading}</h3>
      <ScrollMenu
        data={List(items, items[0])}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        // selected={selected}
        // onSelect={this.onSelect}
      />
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
  .Card {
    flex: 0 0 auto;
    margin-left: 1rem;
  }
`;
