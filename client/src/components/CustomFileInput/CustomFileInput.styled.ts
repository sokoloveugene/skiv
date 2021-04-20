import styled from "styled-components";
import { colors } from "consts/colors";

export const StyledInputButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 22px;
  border-radius: 5px;
  border: 1px solid ${colors.lightGrey};
  padding: 9px 12px;
  overflow: hidden;
  user-select: none;
  color: ${colors.brown};
  cursor: pointer;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Icon = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 8px;

  & > svg {
    height: 100%;
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
`;
