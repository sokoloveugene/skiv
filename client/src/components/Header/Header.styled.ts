import styled from "styled-components";
import { colors } from "../../consts/colors";

export const HeaderContainer = styled.div`
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Burger = styled.img`
  width: 28px;
  height: 20px;
  cursor: pointer;
`;

export const LogoLink = styled.img`
  width: 100px;
`;

export const ControlGroup = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const ControlItem = styled.li`
  margin-right: 30px;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
`;

export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2px;
  left: 12px;
  border-radius: 50%;
  background-color: ${colors.peach};
  color: ${colors.white};
  height: 16px;
  min-width: 16px;
  font-size: 12px;
  padding: 2px;
`;

export const ControlIcon = styled.img`
  display: block;
  height: 20px;
  min-width: 20px;
  position: relative;
`;

export const Link = styled.h1``;
