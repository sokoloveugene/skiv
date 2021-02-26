import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  const [search, setSearch] = useState<boolean>(false);

  const history = useHistory();

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <>
      <s.HeaderContainer>
        <s.HeaderBlock start>
          <s.Burger
            onClick={() => setMenu(true)}
            src={Burger}
            alt="burger icon"
            role="button"
          />
        </s.HeaderBlock>

        <s.HeaderBlock center>
          <s.LogoLink
            onClick={() => history.push("/")}
            src={Logo}
            alt="logo"
            role="button"
          />
        </s.HeaderBlock>

        <s.HeaderBlock end>
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
            <s.ControlItem onClick={() => history.push("/cart")}>
              <s.ControlIcon src={Cart} alt="cart icon" role="button" />
              <s.Badge>13</s.Badge>
            </s.ControlItem>
          </s.ControlGroup>
        </s.HeaderBlock>
      </s.HeaderContainer>
      <DividerFullWidth />

      {menu && <SideBar onClose={() => setMenu(false)} />}
      {search && <Search onClose={() => setSearch(false)} />}
    </>
  );
};

export default Header;
