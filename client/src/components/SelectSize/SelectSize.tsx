import React, { useState } from "react";
import * as s from "./SelectSize.styled";

interface SelectOptionI {
  id: number;
  title: string;
  available: number;
}

const selectSizeData = [
  { id: 1, title: "XS", available: 2 },
  { id: 2, title: "S", available: 2 },
  { id: 3, title: "M", available: 2 },
  { id: 4, title: "L", available: 0 },
];

const SelectSize: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionI | null>(
    null
  );

  const handleChange = (value: SelectOptionI) => {
    setSelectedOption(value);
  };

  return (
    <>
      <s.Title>Розмiр</s.Title>
      <s.Container>
        {selectSizeData.map((el) => (
          <s.Label
            key={el.id}
            checked={el.id === selectedOption?.id}
            disabled={!el.available}
          >
            <s.HiddenCheckbox
              name="size"
              type="radio"
              onChange={() => handleChange(el)}
              checked={el.id === selectedOption?.id}
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
