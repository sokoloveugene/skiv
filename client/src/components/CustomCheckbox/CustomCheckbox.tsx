/* eslint react/jsx-props-no-spreading: "off" */
import React, { useState } from "react";
import * as s from "./CustomCheckbox.styled";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { title: string; customMargin?: string };

const CustomCheckbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ title, customMargin, ...props }, ref) => {
    const [checked, setChecked] = useState(false);

    return (
      <s.Wrapper customMargin={customMargin}>
        <s.Label checked={checked}>
          <s.HiddenCheckbox
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            type="checkbox"
            ref={ref as any}
            {...props}
          />
          <s.Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </s.Icon>
        </s.Label>
        <s.Title>{title}</s.Title>
      </s.Wrapper>
    );
  }
);

export default CustomCheckbox;
