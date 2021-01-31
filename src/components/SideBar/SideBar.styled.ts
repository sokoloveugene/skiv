import styled from "styled-components";
import colors from "../../consts/colors";

export const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  backdrop-filter: blur(2px);
`;

export const MenuContainer = styled.div`
  min-height: 100%;
  flex-basis: 40%;
  background-color: ${colors.brown};
  z-index: 2;
  padding: 37px 130px;
  display: flex;
  flex-direction: column;
`;

export const CloseBtn = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: 56px;
`;
