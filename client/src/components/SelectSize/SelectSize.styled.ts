import styled from "styled-components";
import { colors } from "consts/colors";

export const Title = styled.h3`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.brown};
  letter-spacing: 0.05em;
  margin-bottom: 14px;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 54px;
  flex-wrap: wrap;
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const Label = styled.label<{
  checked: boolean;
  disabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  background: ${(props) => (props.checked ? colors.peach : colors.white)};
  border-radius: 5px;
  transition: all 150ms;
  border: ${(props) =>
    props.checked ? "none" : `1px solid ${colors.lightGrey}`};
  color: ${(props) => (props.checked ? colors.white : colors.lightGrey)};
  user-select: none;
  font-size: 18px;
  position: relative;
  margin: 5px 25px 5px 0px;

  &::after {
    content: "";
    position: absolute;
    height: ${(props) => (props.disabled ? "56px" : "0px")};
    border-right: 1px solid #cdcbca;
    top: 42%;
    right: 48%;
    transform: translate(-50%, -45%) rotate(45deg);
  }
`;
