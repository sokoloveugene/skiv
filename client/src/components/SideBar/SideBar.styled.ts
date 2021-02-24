import styled, { keyframes } from "styled-components";
import { colors } from "../../consts/colors";

const slide = keyframes`
  0% {
    backdrop-filter: blur(1px);
    left: -100%;
  }
  100% {
    backdrop-filter: blur(2px);
    left: 0;
  }
`;

export const MenuContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  flex-basis: 40%;
  background: ${colors.brown};
  padding: 37px 30px;
  display: flex;
  flex-direction: column;
`;

export const CloseBtn = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: 56px;
`;

export const ShadowBlur = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  backdrop-filter: blur(2px);
  animation: 0.1s ${slide} linear;
`;
