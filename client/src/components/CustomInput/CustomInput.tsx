/* eslint react/jsx-props-no-spreading: "off" */
import React, { useState } from "react";
import { normalize, normalizeOptionType } from "helpers/normalize";
import * as s from "./CustomInput.styled";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string; mask?: normalizeOptionType };

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, mask, ...props }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const normalizedValue = mask ? normalize(value, mask) : value;
      setInputValue(normalizedValue);
      e.target.value = normalizedValue;
    };

    const handleFocus = () => {
      setHasValue(true);
    };

    const handleBlur = () => {
      if (inputValue) return;
      setHasValue(false);
    };

    return (
      <>
        <s.Label hasValue={hasValue}>{label}</s.Label>
        <s.Input
          {...props}
          onChange={handleChange}
          autoComplete="off"
          type="text"
          ref={ref as any}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </>
    );
  }
);

export default CustomInput;
