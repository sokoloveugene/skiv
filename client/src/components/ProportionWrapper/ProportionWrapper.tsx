import React from "react";
import * as s from "./ProportionWrapper.styled";

interface ProportionWrapperI {
  horizontalRation: number;
  verticatRation: number;
}

const ProportionWrapper: React.FC<ProportionWrapperI> = ({
  children,
  horizontalRation,
  verticatRation,
}) => {
  return (
    <s.WrapperProportion x={horizontalRation} y={verticatRation}>
      <s.WrapperProportionInner>{children}</s.WrapperProportionInner>
    </s.WrapperProportion>
  );
};

export default ProportionWrapper;
