import styled from "styled-components";
import { colors } from "../../consts/colors";

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button<{ customMargin?: string }>`
  display: block;
  background-color: ${colors.peach};
  color: ${colors.white};
  padding: 18px 57px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  line-height: 22px;
  margin: ${(props) => props.customMargin || ""};
`;
