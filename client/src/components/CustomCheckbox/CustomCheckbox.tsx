/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";
import * as s from "./CustomCheckbox.styled";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { title: string; customMargin?: string; small?: boolean };

const CustomCheckbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ title, customMargin, small, ...props }, ref) => (
    <s.Wrapper customMargin={customMargin}>
      <s.Label small={small}>
        <s.HiddenCheckbox ref={ref as any} {...props} />
        <s.Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </s.Icon>
      </s.Label>
      <s.Title small={small}>{title}</s.Title>
    </s.Wrapper>
  )
);

export default CustomCheckbox;
