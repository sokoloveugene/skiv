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

export const Preview = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-column-gap: 10px;
  align-items: center;
  margin: 8px 0px;
`;

export const TruncateContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Truncated = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  width: 10px;
  color: ${colors.brown};
  font-size: 18px;
  font-weight: 300;
`;

export const CloseButton = styled.button`
  display: block;
  height: 13px;
  width: 13px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  outline: none;

  & > svg {
    fill: ${colors.brown};
    width: 100%;
    height: 100%;
  }
`;
