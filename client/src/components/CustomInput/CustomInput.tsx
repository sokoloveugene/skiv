/* eslint react/jsx-props-no-spreading: "off" */
import React, { useEffect, useRef, useState } from "react";
import { normalize, normalizeOptionType } from "helpers/normalize";
import { AddColorful } from "assets/icons";
import * as s from "./CustomInput.styled";

interface CustomInputI {
  value: any;
  onChange: (...e: any[]) => void;
  label: string;
  mask?: normalizeOptionType;
  errorMessage: string | undefined;
  type?: string;
  icon?: boolean;
  onIconClick?: () => void;
}

const CustomInput: React.FC<CustomInputI> = ({
  value,
  onChange,
  errorMessage,
  label,
  mask,
  type = "text",
  onIconClick,
  icon = false,
}) => {
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (value) {
      setHasValue(true);
      return;
    }

    // hard reset input value on react-hook-form reset
    if (inputRef.current && inputRef.current.value) {
      inputRef.current.value = "";
    }
    setHasValue(false);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: eventValue } = e.target;
    e.target.value = mask ? normalize(eventValue, mask) : eventValue;
    onChange(e);
  };

  const handleFocus = () => setHasValue(true);

  const handleBlur = () => {
    if (!value) setHasValue(false);
  };

  return (
    <s.Container>
      <s.Label hasValue={hasValue}>{label}</s.Label>
      <s.Input
        ref={inputRef}
        hasIcon={icon}
        hasError={!!errorMessage}
        onChange={handleChange}
        autoComplete="off"
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {icon && <s.Icon src={AddColorful} onClick={onIconClick} />}
      <s.ErrorMessage>{errorMessage}</s.ErrorMessage>
    </s.Container>
  );
};

export default CustomInput;
