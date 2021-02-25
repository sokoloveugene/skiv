import styled from "styled-components";
import { colors } from "../../consts/colors";

export const Button = styled.button<{
  customMargin?: string;
  customPadding?: string;
  maxWidth?: string;
  transparent?: boolean;
}>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.transparent ? "transparent" : colors.peach};
  color: ${(props) => (props.transparent ? colors.peach : colors.white)};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  line-height: 22px;
  margin: ${(props) => props.customMargin || ""};
  padding: ${(props) => props.customPadding || "18px 57px"};
  max-width: ${(props) => props.maxWidth || ""};
`;

export const Icon = styled.img`
  height: 22px;
  width: 22px;
  margin-right: 12px;
`;
