import React from "react";
import styled from "styled-components";

export const AppHeader = () => (
  <StyledHeader>
    <img
      src="./8-flix.png"
      style={{ height: "100%" }}
      alt="8FLIX - Go Bynzzzz!"
    />
  </StyledHeader>
);

const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  padding: 12px 24px;
  text-align: left;
  box-shadow: 2px 2px 2px solid black;
`;
