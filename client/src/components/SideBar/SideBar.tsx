import React from "react";
import { Link } from "react-router-dom";
import { logOutRequest } from "api/authApi";
import { useStoreContext } from "store/storeContext";
import { useOutsideAction } from "hooks/useClickOutside";
import { Close } from "assets/icons";
import SocialLinks from "../SocialLinks";
import SideBarCategories from "../SideBarCategories";
import * as s from "./SideBar.styled";

interface SideBarI {
  onClose: () => void;
}

const SideBar: React.FC<SideBarI> = ({ onClose }) => {
  const { authStore } = useStoreContext();
  const [contentRef] = useOutsideAction(onClose);

  const handleLogOut = async () => {
    const resData = await logOutRequest();
    if (resData) {
      authStore.setAuth(resData.isAuthenticated);
    }
  };

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
        <Link to="/login">login</Link>
        <button type="button" onClick={handleLogOut}>
          log out
        </button>
      </s.MenuContainer>
    </s.ShadowBlur>
  );
};

export default SideBar;
