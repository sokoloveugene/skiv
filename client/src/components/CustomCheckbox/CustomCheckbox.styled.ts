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

export const Label = styled.label<{ checked: boolean }>`
  display: block;
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: 1px solid ${colors.lightGrey};
  border-radius: 3px;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const Title = styled.p`
  color: ${colors.brown};
  margin-left: 10px;
  font-size: 18px;
  line-height: 22px;
`;
