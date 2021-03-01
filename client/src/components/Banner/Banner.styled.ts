import styled from "styled-components";
import { colors } from "consts/colors";

export const Container = styled.div`
  width: 100vw;
  position: relative;
  z-index: 1;
  left: 50%;
  right: 50%;
  margin: 30px -50vw;
`;

export const ImageBanner = styled.img`
  width: 50%;
  height: calc(100vw / 2);
`;

export const Title = styled.h2`
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  line-height: 42px;
  color: ${colors.white};
  text-align: center;
  text-shadow: 0px 15px 2px #00000025;
  padding: 0px 16px;
`;
