import styled from "styled-components";
import { colors } from "consts/colors";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const Container = styled.div<{ step: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.step}, 1fr)`};
  grid-column-gap: 10px;
  grid-row-gap: 26px;
`;

export const Title = styled.p`
  color: ${colors.textColor};
  font-size: 24px;
  line-height: 28px;
`;
