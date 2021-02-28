import styled from "styled-components";
import { colors } from "../../consts/colors";

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 16px 28px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 10px;
  width: 277px;
  position: fixed;
  right: 120px;
  top: 100px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Image = styled.img`
  height: 91px;
  width: 71px;
  object-fit: cover;
  margin-right: 21px;
`;

export const Title = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${colors.brown};
  margin-bottom: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.brown};
  margin-bottom: 3px;
`;

export const AdditionalText = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.peach};
  margin-bottom: 7px;
`;
