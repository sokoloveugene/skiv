import styled, { keyframes } from "styled-components";
import { colors } from "consts/colors";

const heartBeat = keyframes`
  0% {
    transform: scale( .8 );
  } 20%
  {
    transform: scale( 1 );
  } 40%
  {
    transform: scale( .8 );
  } 60%
  {
    transform: scale( 1 );
  } 80%
  {
    transform: scale( .8 );
  } 100%
  {
    transform: scale( .8 );
  }
`;

export const Card = styled.div`
  min-height: 100px;
  flex-basis: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
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

export const ControlIcon = styled.img`
  display: block;
  height: 20px;
  min-width: 20px;
  position: absolute;
  top: 4%;
  right: 4%;
  opacity: 0;
  transition: opacity 0.3s;
  animation: 2s ${heartBeat} infinite linear;

  &:hover {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover + ${ControlIcon} {
    opacity: 1;
  }
`;
