import styled from "styled-components";
import { colors } from "../../consts/colors";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
`;

export const Card = styled.div`
  min-height: 100px;
  flex-basis: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${colors.textColor};
  font-size: 24px;
  line-height: 28px;
`;

export const Tag = styled.p`
  color: ${`${colors.brown}45`};
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  color: ${colors.brown};
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  color: ${colors.brown};
  font-size: 20px;
  line-height: 24px;
`;

export const WrapperProportion = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 12px;

  &:before {
    content: "";
    display: block;
    padding-top: 133.7%; /* initial ratio of 374:500*/
  }
`;

export const WrapperProportionInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
