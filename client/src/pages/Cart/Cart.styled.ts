import styled from "styled-components";
import { colors } from "../../consts/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${colors.brown};
  margin: 44px 0px 77px 0px;
`;

export const CartItemsContainer = styled.div`
  flex-basis: 60%;
  margin-right: 10%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px 1fr 40px;
  align-items: center;
`;

export const Сentered = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderTitle = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.brown};
`;

export const KeyWrapper = styled.div``;
