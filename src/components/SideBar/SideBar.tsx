import React from "react";
import SocialLinks from "../SocialLinks";
import SideBarCategories from "../SideBarCategories";
import * as s from "./SideBar.styled";
import { Close } from "../../assets/icons";
import useOutsideAction from "../../hooks/useClickOutside";

interface SideBarI {
  onClose: () => void;
}

const SideBar: React.FC<SideBarI> = ({ onClose }) => {
  const [contentRef] = useOutsideAction(onClose);

  return (
    <s.Shadow>
      <s.MenuContainer ref={contentRef}>
        <s.CloseBtn
          src={Close}
          alt="close icon"
          onClick={onClose}
          role="button"
        />

        <SideBarCategories />

        <SocialLinks />
      </s.MenuContainer>
    </s.Shadow>
  );
};

export default SideBar;
