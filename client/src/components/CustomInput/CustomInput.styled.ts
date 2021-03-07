import styled from "styled-components";
import { colors } from "consts/colors";

export const Input = styled.input`
  display: block;
  font-size: 18px;
  line-height: 22px;
  border-radius: 5px;
  border: 1px solid ${colors.lightGrey};
  padding: 14px 12px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${colors.brown};
  }
`;

export const Label = styled.p<{ hasValue: boolean }>`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.brown};
  display: block;
  margin-bottom: 8px;
  position: relative;
  top: ${(props) => (props.hasValue ? "0px" : "45px")};
  left: ${(props) => (props.hasValue ? "0px" : "13px")};
  transition: all 0.2s;
  pointer-events: none;
  color: ${(props) => (props.hasValue ? colors.brown : colors.lightGrey)};
`;
