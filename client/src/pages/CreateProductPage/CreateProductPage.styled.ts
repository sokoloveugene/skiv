import styled from "styled-components";

export const Layout = styled.div``;

export const GridForm = styled.form`
  display: grid;
  max-width: 667px;
  margin: 0 auto;
  grid-gap: 30px;
  grid-template-areas:
    "productName price"
    "upload placeholder"
    "amount placeholder"
    "category placeholder"
    "sizeSelector sizeSelector"
    "composition composition"
    "measurements measurements"
    "controls controls";
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;
