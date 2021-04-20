import styled from "styled-components";
import { colors } from "consts/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  padding: 0 20px;
  margin: 50px auto 100px auto;
`;

export const Wrapper = styled.div``;

export const Title = styled.p`
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${colors.textColor};
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: ${colors.peach};
  margin-bottom: 5px;
`;
