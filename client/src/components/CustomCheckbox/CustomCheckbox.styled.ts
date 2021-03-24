import styled from "styled-components";
import { colors } from "consts/colors";

export const Wrapper = styled.div<{ customMargin?: string }>`
  display: flex;
  align-items: center;
  margin: ${(props) => props.customMargin || ""};
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${colors.brown};
  stroke-width: 1px;
`;

export const Label = styled.label<{ small?: boolean }>`
  transform: ${({ small }) => small && "scale(0.7) translateX(-7px)"};
  display: block;
  height: 30px;
  width: 30px;
  min-width: 30px;
  background-color: transparent;
  border: 1px solid ${colors.lightGrey};
  border-radius: 3px;
`;

export const HiddenCheckbox = styled.input`
  display: none;

  &:checked + ${Icon} {
    visibility: visible;
  }

  &:not(:checked) + ${Icon} {
    visibility: hidden;
  }
`;

export const Title = styled.p<{ small?: boolean }>`
  color: ${colors.brown};
  margin-left: 10px;
  font-size: ${({ small }) => (small ? "12px" : "18px")};
  line-height: ${({ small }) => (small ? "14px" : "22px")};
`;
