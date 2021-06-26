import styled from "styled-components";
import { colors } from "consts/colors";

export const CopyButton = styled.button`
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    & > svg {
      fill: ${colors.brown};
    }
  }

  & > svg {
    fill: ${colors.lightGrey};
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.p`
  color: ${colors.brown};
  font-size: 18px;
  line-height: 22px;
`;

export const OrderNumberContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
