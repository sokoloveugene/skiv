import React from "react";
import { SizeOptionI } from "types";
import * as s from "./SelectSize.styled";

interface SelectSizeI {
  options: Array<SizeOptionI> | undefined;
  selectedOption: SizeOptionI | null;
  setSelectedOption: (option: SizeOptionI) => void;
}

const SelectSize: React.FC<SelectSizeI> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const handleChange = (value: SizeOptionI) => {
    setSelectedOption(value);
  };

  if (!options) return null;

  return (
    <>
      <s.Title>Розмiр</s.Title>
      <s.Container>
        {options.map((el) => (
          <s.Label
            key={el._id}
            checked={el._id === selectedOption?._id}
            disabled={!el.available}
          >
            <s.HiddenCheckbox
              name="size"
              type="radio"
              onChange={() => handleChange(el)}
              checked={el._id === selectedOption?._id}
              disabled={!el.available}
            />
            {el.title}
          </s.Label>
        ))}
      </s.Container>
    </>
  );
};

export default SelectSize;
