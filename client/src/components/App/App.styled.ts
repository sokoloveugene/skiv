import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
  max-width: 1100px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex-grow: 1;
`;
