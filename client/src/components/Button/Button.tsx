import React from "react";
import * as s from "./Button.styled";

interface ButtonI {
  title: string;
  onClick: () => void;
  customMargin?: string;
}

const Button: React.FC<ButtonI> = ({ title, onClick, customMargin }) => {
  return (
    <s.Button onClick={onClick} customMargin={customMargin}>
      {title}
    </s.Button>
  );
};

export default Button;
