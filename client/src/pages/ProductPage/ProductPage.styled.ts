import styled from "styled-components";
import { colors } from "../../consts/colors";

export const SideImage = styled.img<{ active?: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: ${(props) => (props.active ? "" : "grayscale(60%)")};
  opacity: ${(props) => (props.active ? 1 : 0.8)};
`;

export const MainImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  max-height: 770px;
`;

export const RightContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 84px;
`;

export const PreviewContainer = styled.ul`
  list-style: none;
  margin-right: 84px;
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  overflow-x: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

export const PreviewListItem = styled.li`
  height: 94px;
  width: 89px;
  margin-bottom: 12px;
`;

export const ProductTitle = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: ${colors.brown};
  margin-bottom: 18px;
`;

export const KeyWrapper = styled.div``;