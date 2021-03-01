import styled from "styled-components";
import { colors } from "consts/colors";

export const Divider = styled.div<{ customMargin?: string }>`
  height: 1px;
  background-color: ${colors.grey};
  margin: ${(props) => props.customMargin};
`;

export const DividerFullWidth = styled(Divider)`
  width: 100vw;
  position: relative;
  z-index: 1;
  left: 50%;
  right: 50%;
  margin: 0px -50vw 36px -50vw;
`;
