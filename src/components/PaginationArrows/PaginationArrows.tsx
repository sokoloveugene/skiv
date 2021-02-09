import React from "react";
import * as s from "./PaginationArrows.styled";
import { ReactComponent as PaginationArrow } from "../../assets/icons/PaginationArrow.svg";

const PaginationArrows: React.FC = () => {
  return (
    <s.Container>
      <s.SvgContainer>
        <PaginationArrow />
      </s.SvgContainer>
      <s.SvgContainerRotated disabled>
        <PaginationArrow />
      </s.SvgContainerRotated>
    </s.Container>
  );
};

export default PaginationArrows;
