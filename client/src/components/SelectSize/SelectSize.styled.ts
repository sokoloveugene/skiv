import styled from "styled-components";
import { colors } from "../../consts/colors";

export const Container = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
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
    props.checked ? "none" : `1px solid ${colors.lightGray}`};
  color: ${(props) => (props.checked ? colors.white : colors.lightGray)};
  user-select: none;
  font-size: 18px;
  position: relative;

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
