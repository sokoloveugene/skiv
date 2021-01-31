import React, { useState } from "react";
import SideBar from "../SideBar";
import * as s from "./Header.styled";
import {
  Burger,
  Logo,
  Search,
  WishActive,
  WishNotActive,
  Cart,
} from "../../assets/icons";

const Header: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <>
      <s.HeaderContainer>
        <s.Burger
          onClick={() => setMenu(true)}
          src={Burger}
          alt="burger icon"
          role="button"
        />
        <s.LogoLink src={Logo} alt="logo" role="button" />
        <s.ControlGroup>
          <s.ControlItem>
            <s.ControlIcon src={Search} alt="search icon" role="button" />
          </s.ControlItem>
          <s.ControlItem onClick={toggleLike}>
            <s.ControlIcon
              src={liked ? WishActive : WishNotActive}
              alt="wish icon"
              role="button"
            />
          </s.ControlItem>
          <s.ControlItem>
            <s.ControlIcon src={Cart} alt="cart icon" role="button" />
            <s.Badge>13</s.Badge>
          </s.ControlItem>
        </s.ControlGroup>
      </s.HeaderContainer>

      {menu && <SideBar onClose={() => setMenu(false)} />}
    </>
  );
};

export default Header;
