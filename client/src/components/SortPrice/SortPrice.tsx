import React, { useState } from "react";
import useOutsideAction from "../../hooks/useClickOutside";
import * as s from "./SortPrice.styled";
import { Sorting, ArrowDown } from "../../assets/icons";

const options = [
  { title: "Новi надходження", query: "date" },
  { title: "Цiна, Низька", query: "high" },
  { title: "Цiна, Висока", query: "low" },
];

const SortPrice: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleClose = () => {
    setOpen(false);
  };

  const [contentRef] = useOutsideAction(handleClose);

  const handleOption = (value: any) => {
    setSelectedOption(value);
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <s.Container>
      <s.SvgIcon src={Sorting} />
      <s.InnerContainer onClick={handleOpen}>
        <s.Text>{selectedOption.title}</s.Text>
        <s.SvgArrowIcon src={ArrowDown} toggle={open} />
      </s.InnerContainer>
      {open && (
        <s.SortBlock ref={contentRef}>
          {options
            .filter((option) => option.title !== selectedOption.title)
            .map((el) => (
              <s.SortText key={el.query} onClick={() => handleOption(el)}>
                {el.title}
              </s.SortText>
            ))}
        </s.SortBlock>
      )}
    </s.Container>
  );
};

export default SortPrice;
