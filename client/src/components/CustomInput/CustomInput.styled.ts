import styled from "styled-components";
import { colors } from "consts/colors";

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input<{ hasError: boolean }>`
  display: block;
  font-size: 18px;
  line-height: 22px;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${(props) =>
    props.hasError ? "red !important" : colors.lightGrey};
  padding: 14px 12px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${colors.brown};
  }
`;

export const Label = styled.p<{ hasValue: boolean }>`
  display: inline-block;
  position: absolute;
  top: ${(props) => (props.hasValue ? "-3px" : "16px")};
  left: ${(props) => (props.hasValue ? "12px" : "13px")};
  font-size: ${(props) => (props.hasValue ? "8px" : "18px")};
  line-height: ${(props) => (props.hasValue ? "8px" : "22px")};
  color: ${(props) => (props.hasValue ? colors.brown : colors.lightGrey)};
  background-color: ${colors.white};
  padding: 0px 4px;
  pointer-events: none;
  transition: all 0.2s;
`;

export const ErrorMessage = styled.p`
  display: inline-block;
  position: absolute;
  bottom: -3px;
  left: 12px;
  font-size: 8px;
  color: red;
  background-color: ${colors.white};
  padding: 0px 4px;
`;
