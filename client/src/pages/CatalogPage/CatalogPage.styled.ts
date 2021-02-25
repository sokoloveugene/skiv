import styled from "styled-components";

export const Navigation = styled.div`
  flex-basis: 220px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;
