import { colors } from "consts/colors";
import styled from "styled-components";

export const BackDrop = styled.div`
  background-color: #00000015;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-height: calc(100% - 40px);
  position: relative;
  margin: 20px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  text-align: center;
  border-radius: 20px;
  padding: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Content = styled.div``;

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 12px;
  display: block;
  height: 13px;
  width: 13px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & > svg {
    fill: ${colors.brown};
    width: 100%;
    height: 100%;
  }
`;
