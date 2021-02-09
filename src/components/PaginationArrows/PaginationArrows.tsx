import React from "react";
import * as s from "./PaginationArrows.styled";
import { ReactComponent as PaginationArrow } from "../../assets/icons/PaginationArrow.svg";

interface PaginationArrowsI {
  next: () => void;
  prev: () => void;
  disabledNext: boolean;
  disabledPrev: boolean;
}

const PaginationArrows: React.FC<PaginationArrowsI> = ({
  next,
  prev,
  disabledNext,
  disabledPrev,
}) => {
  return (
    <s.Container>
      <s.SvgContainer onClick={prev} disabled={disabledPrev} role="button">
        <PaginationArrow />
      </s.SvgContainer>
      <s.SvgContainerRotated
        onClick={next}
        disabled={disabledNext}
        role="button"
      >
        <PaginationArrow />
      </s.SvgContainerRotated>
    </s.Container>
  );
};

export default PaginationArrows;
