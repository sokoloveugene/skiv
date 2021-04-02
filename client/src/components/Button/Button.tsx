import React from "react";
import * as s from "./Button.styled";

interface ButtonI {
  type?: "submit" | "button";
  title: string;
  onClick: () => void;
  customMargin?: string;
  customPadding?: string;
  maxWidth?: string;
  icon?: string;
  transparent?: boolean;
  inversion?: boolean;
}

const Button: React.FC<ButtonI> = ({
  type = "button",
  title,
  onClick,
  customMargin,
  maxWidth,
  icon,
  customPadding,
  transparent,
  inversion,
}) => {
  return (
    <s.Button
      type={type}
      onClick={onClick}
      customMargin={customMargin}
      maxWidth={maxWidth}
      customPadding={customPadding}
      transparent={transparent}
      inversion={inversion}
    >
      {icon && <s.Icon src={icon} />}
      {title}
    </s.Button>
  );
};

export default Button;
