import styled from "styled-components";
import { colors } from "consts/colors";

export const ListItem = styled.li<{ withName: boolean }>`
  display: grid;
  grid-template-columns: ${({ withName }) =>
    withName ? "30px 1fr 30px" : "30px 30px"};
  grid-column-gap: 10px;
  align-items: center;
  margin: 8px 0px;
`;

export const FullSizeImage = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 110px);
  object-fit: cover;
`;

export const Preview = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  cursor: pointer;
`;

export const TruncateContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Truncated = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  width: 10px;
  color: ${colors.brown};
  font-size: 18px;
  font-weight: 300;
`;

export const CloseButton = styled.button`
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
