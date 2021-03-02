import styled from "styled-components";
import { colors } from "consts/colors";

export const Container = styled.div`
  margin-left: auto;
  position: relative;
  display: flex;
  width: fit-content;
  margin-bottom: 35px;
`;

export const SvgIcon = styled.img`
  height: 16px;
  width: 15px;
  margin-right: 28px;
  cursor: pointer;
  user-select: none;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${colors.brown};
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  user-select: none;
`;

export const SvgArrowIcon = styled.img<{ toggle: boolean }>`
  height: 8px;
  width: 14px;
  transform: ${(props) => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 150ms;
  margin-left: 7px;
  user-select: none;
`;

export const SortBlock = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  width: 162px;
  height: 101px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SortText = styled(Text)`
  margin-bottom: 11px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0px;
  }
`;
