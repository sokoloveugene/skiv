import React from "react";
import useOutsideAction from "hooks/useClickOutside";
import { Close } from "assets/icons";
import SocialLinks from "../SocialLinks";
import SideBarCategories from "../SideBarCategories";
import * as s from "./SideBar.styled";

interface SideBarI {
  onClose: () => void;
}

const SideBar: React.FC<SideBarI> = ({ onClose }) => {
  const [contentRef] = useOutsideAction(onClose);

  return (
    <s.ShadowBlur>
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
    </s.ShadowBlur>
  );
};

export default SideBar;
