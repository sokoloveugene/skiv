import styled from "styled-components";

export const WrapperProportion = styled.div<{ x: number; y: number }>`
  position: relative;
  width: 100%;
  margin-bottom: 12px;

  &:before {
    content: "";
    display: block;
    padding-top: ${(props) => `${(props.y / props.x) * 100}%`};
  }
`;

export const WrapperProportionInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
