import React, { useCallback, useState } from "react";
import { useOutsideAction } from "hooks/useClickOutside";
import { ArrowDown } from "assets/icons";
import { OptionI } from "types";
import * as s from "./CustomSelect.styled";

interface CustomSelectI {
  options: OptionI[];
  placeholder: string;
  onChange: (value: OptionI) => void;
  selectedValue: OptionI;
}

const CustomSelect: React.FC<CustomSelectI> = ({
  options,
  placeholder,
  onChange,
  selectedValue: { value, label } = {},
}) => {
  const [opened, setOpened] = useState(false);

  const handleClose = useCallback(() => setOpened(false), []);
  const [contentRef] = useOutsideAction(handleClose);

  const handleSelect = (option: OptionI): void => {
    setOpened(false);
    onChange(option);
  };

  return (
    <s.Wrapper>
      <s.MainOption hasValue={!!value} onClick={() => setOpened((p) => !p)}>
        {label || placeholder}
        <s.ArrowIcon alt="icon" src={ArrowDown} open={opened} />
      </s.MainOption>

      {opened && (
        <s.List ref={contentRef}>
          {options.map((opt) => (
            <s.Option
              active={value === opt.value}
              onClick={() => handleSelect(opt)}
              key={opt.label}
            >
              {opt.label}
            </s.Option>
          ))}
        </s.List>
      )}
    </s.Wrapper>
  );
};

export default CustomSelect;
