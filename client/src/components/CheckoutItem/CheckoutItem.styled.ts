import { colors } from "consts/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px 100px;
  align-items: center;
  margin-bottom: 20px;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  min-width: 70px;
  max-width: 70px;
  height: 92px;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 15px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Text = styled.p`
  color: ${colors.brown};
  font-size: 14px;
  line-height: 16px;
`;

export const Price = styled(Text)`
  text-align: end;
`;

export const Amount = styled.p`
  color: ${colors.peach};
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;
