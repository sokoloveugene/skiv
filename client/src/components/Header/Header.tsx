import React, { useState } from "react";
import SideBar from "../SideBar";
import * as s from "./Header.styled";
import {
  Burger,
  Logo,
  SearchIcon,
  WishActive,
  WishNotActive,
  Cart,
} from "../../assets/icons";
import Search from "../Search";
import { DividerFullWidth } from "../../ui/ui.styled";

const Header: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState(false);

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
            <s.ControlIcon
              src={SearchIcon}
              alt="search icon"
              role="button"
              onClick={() => setSearch(true)}
            />
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
      <DividerFullWidth />

      {menu && <SideBar onClose={() => setMenu(false)} />}
      {search && <Search onClose={() => setSearch(false)} />}
    </>
  );
};

export default Header;
