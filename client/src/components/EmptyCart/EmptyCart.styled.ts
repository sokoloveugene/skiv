import styled from "styled-components";
import { colors } from "consts/colors";

export const CartIllustration = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 206px;
  height: 202px;
  margin: 0 auto;
  &::before {
    content: "SKIV";
    display: block;
    color: ${colors.brown};
    font-size: 20px;
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: "You are so close to  your soul clothes";
    display: block;
    color: ${colors.brown};
    font-size: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.brown};
  margin: 20px 0px 100px 0px;
`;
