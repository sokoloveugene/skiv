/* eslint react/jsx-props-no-spreading: "off" */
import React, { useState } from "react";
import { normalize, normalizeOptionType } from "helpers/normalize";
import * as s from "./CustomInput.styled";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  mask?: normalizeOptionType;
  errorMessage: string | undefined;
  type?: string;
};

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, label, mask, type = "text", ...props }, ref) => {
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
      <s.Container>
        <s.Label hasValue={hasValue}>{label}</s.Label>
        <s.Input
          hasError={!!errorMessage}
          {...props}
          onChange={handleChange}
          autoComplete="off"
          type={type}
          ref={ref as any}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <s.ErrorMessage>{errorMessage}</s.ErrorMessage>
      </s.Container>
    );
  }
);

export default CustomInput;
