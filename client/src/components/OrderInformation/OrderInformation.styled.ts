import styled from "styled-components";
import { colors } from "../../consts/colors";

export const Container = styled.div`
  flex-basis: 30%;
`;

export const Title = styled.p`
  color: ${colors.brown};
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListRow = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
`;

export const Text = styled.p`
  color: ${colors.brown};
  font-size: 18px;
  line-height: 22px;
`;
