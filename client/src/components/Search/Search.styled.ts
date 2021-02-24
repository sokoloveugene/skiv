import styled from "styled-components";
import { colors } from "../../consts/colors";

export const Container = styled.div`
  max-width: 638px;
  width: 100%;
  border-bottom: 1px solid ${colors.white};
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  color: ${colors.white};
  padding: 16px;
  font-size: 36px;

  &::placeholder {
    color: ${colors.white};
    font-size: 36px;
  }
  &:focus {
    outline: none;
  }
`;

export const ShadowBlur = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: #00000050;
`;

export const SearchIcon = styled.img`
  height: 24px;
  width: 24px;
`;
