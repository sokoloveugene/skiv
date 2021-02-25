import React from "react";
import * as s from "./Button.styled";

interface ButtonI {
  title: string;
  onClick: () => void;
  customMargin?: string;
  customPadding?: string;
  maxWidth?: string;
  icon?: string;
  transparent?: boolean;
}

const Button: React.FC<ButtonI> = ({
  title,
  onClick,
  customMargin,
  maxWidth,
  icon,
  customPadding,
  transparent,
}) => {
  return (
    <s.Button
      onClick={onClick}
      customMargin={customMargin}
      maxWidth={maxWidth}
      customPadding={customPadding}
      transparent={transparent}
    >
      {icon && <s.Icon src={icon} />}
      {title}
    </s.Button>
  );
};

export default Button;
