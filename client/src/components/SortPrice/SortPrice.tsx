import React, { useState } from "react";
import * as s from "./SortPrice.styled";
import { Sorting, ArrowDown } from "../../assets/icons";

const SortPrice: React.FC = () => {
  const [togglePrice, setTogglePrice] = useState(false);

  const handleChange = () => {
    setTogglePrice((prev) => !prev);
  };

  return (
    <s.Container>
      <s.SvgIcon src={Sorting} />
      <s.InnerContainer onClick={handleChange}>
        <s.Text>Новi надходження</s.Text>
        <s.SvgArrowIcon src={ArrowDown} toggle={togglePrice} />
      </s.InnerContainer>
      {togglePrice && (
        <s.SortBlock>
          <s.SortText>Цiна, Низька</s.SortText>
          <s.SortText>Цiна, Висока</s.SortText>
        </s.SortBlock>
      )}
    </s.Container>
  );
};

export default SortPrice;
