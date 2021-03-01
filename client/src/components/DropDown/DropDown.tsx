import React, { useState } from "react";
import { ArrowDown } from "assets/icons";
import * as s from "./DropDown.styled";

interface DropDownI {
  title: string;
  data: Array<string>;
}

const DropDown: React.FC<DropDownI> = ({ title, data }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((p) => !p);
  };

  return (
    <div>
      <s.Head onClick={toggle}>
        <s.Title>{title}</s.Title>{" "}
        <s.Icon open={open} src={ArrowDown} alt="icon" />
      </s.Head>

      {open && (
        <s.List>
          {data.map((i) => (
            <s.ListItem key={i}>{i}</s.ListItem>
          ))}
        </s.List>
      )}
    </div>
  );
};

export default DropDown;
