import styled from "styled-components";
import { colors } from "consts/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;
`;

export const SvgContainer = styled.div<{ disabled?: boolean }>`
  height: 18px;
  width: 18px;

  & > svg {
    fill: ${(props) => (props.disabled ? colors.disabled : colors.textColor)};
    height: 100%;
    width: 100%;
  }
`;

export const SvgContainerRotated = styled(SvgContainer)`
  transform: rotate(180deg);
`;
