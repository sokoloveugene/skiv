import styled from "styled-components";
import { colors } from "consts/colors";

export const Icon = styled.img<{ open: boolean }>`
  width: 16px;
  height: 8px;
  transform: ${(props) => props.open && "rotate(180deg)"};
  user-select: none;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const Title = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.brown};
  user-select: none;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: ${colors.brown};
`;
