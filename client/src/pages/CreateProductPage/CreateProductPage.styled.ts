import { colors } from "consts/colors";
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
    "category category"
    "sizeSelector sizeSelector"
    "composition composition"
    "measurements measurements"
    "controls controls";
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreateSize = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SizeOption = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.beige};
  color: ${colors.brown};
  padding: 5px 16px;
  width: fit-content;
  border-radius: 5px;
  margin-top: 13px;
  font-size: 18px;
  line-height: 22px;
`;

export const CloseButton = styled.button`
  display: block;
  height: 13px;
  width: 13px;
  margin-left: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & > svg {
    fill: ${colors.brown};
    width: 100%;
    height: 100%;
  }
`;
