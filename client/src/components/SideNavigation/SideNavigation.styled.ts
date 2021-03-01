import styled from "styled-components";
import { colors } from "consts/colors";

export const NavigationList = styled.ul`
  list-style: none;
`;

export const NavigationLink = styled.li<{ active: boolean }>`
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.brown};
  font-weight: ${(props) => props.active && 800};
  cursor: pointer;
`;
