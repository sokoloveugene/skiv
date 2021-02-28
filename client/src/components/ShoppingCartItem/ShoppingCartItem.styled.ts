import styled from "styled-components";
import { colors } from "../../consts/colors";

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px 1fr 40px;
  align-items: center;
`;

export const ProductMainInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 96px;
  height: 115px;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 25px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const TitleContainer = styled.div``;

export const Title = styled.p`
  color: ${colors.brown};
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 8px;
`;

export const Сentered = styled.div`
  display: flex;
  justify-content: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuntityControl = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    fill: ${colors.brown};
  }
`;

export const CloseButton = styled.button`
  height: 13px;
  width: 13px;
  background-color: transparent;
  border: none;

  & > svg {
    fill: ${colors.brown};
    width: 100%;
    width: 100%;
  }
`;

export const Number = styled.p`
  color: ${colors.brown};
  font-size: 18px;
  line-height: 22px;
`;

export const KeyWrapper = styled.div``;
