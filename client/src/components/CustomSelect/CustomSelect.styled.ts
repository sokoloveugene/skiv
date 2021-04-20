import { colors } from "consts/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const MainOption = styled.div<{ hasValue: boolean }>`
  display: block;
  font-size: 18px;
  line-height: 22px;
  border-radius: 5px;
  border: 1px solid ${colors.lightGrey};
  padding: 14px 12px;
  width: 100%;
  overflow: hidden;
  user-select: none;
  color: ${({ hasValue }) => !hasValue && colors.lightGrey};
`;

export const List = styled.div`
  z-index: 2;
  border-radius: 8px;
  width: 100%;
  position: absolute;
  top: 60px;
  padding: 5px 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: ${colors.white};
`;

export const Option = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? colors.blue : colors.white)};
  color: ${({ active }) => (active ? colors.white : colors.lightGrey)};
  font-size: 18px;
  padding: 14px 12px;

  &:hover {
    background-color: ${({ active }) =>
      active ? colors.blue : colors.lightBlue};
  }
`;

export const ArrowIcon = styled.img<{ open: boolean }>`
  position: absolute;
  right: 20px;
  top: 50%;
  height: 8px;
  width: 14px;
  transform-origin: center;
  transform: ${({ open }) =>
    open ? "rotate(180deg) translateY(50%)" : "rotate(0deg) translateY(-50%)"};
  transition: all 150ms;
  user-select: none;
`;
