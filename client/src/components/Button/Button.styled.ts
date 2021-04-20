import styled from "styled-components";
import { colors } from "consts/colors";

export const Button = styled.button<{
  customMargin?: string;
  customPadding?: string;
  maxWidth?: string;
  transparent?: boolean;
  inversion?: boolean;
}>`
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.transparent || props.inversion ? "transparent" : colors.peach};
  color: ${(props) =>
    props.transparent || props.inversion ? colors.peach : colors.white};
  border: ${(props) =>
    props.inversion ? `1px solid ${colors.peach}` : "none"};
  border-radius: 5px;
  font-size: 18px;
  line-height: 22px;
  margin: ${(props) => props.customMargin || ""};
  padding: ${(props) => props.customPadding || "18px 57px"};
  max-width: ${(props) => props.maxWidth || ""};
  outline: none;
  cursor: pointer;
  user-select: none;
`;

export const Icon = styled.img`
  height: 22px;
  width: 22px;
  margin-right: 12px;
`;
