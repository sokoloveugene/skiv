import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
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
import { useStoreContext } from "../../store/storeContext";

const CartIconWithBange: React.FC = observer(() => {
  const history = useHistory();
  const { cartStore } = useStoreContext();

  return (
    <s.ControlItem onClick={() => history.push("/cart")}>
      <s.ControlIcon src={Cart} alt="cart icon" role="button" />
      {!!cartStore.itemsInCart && <s.Badge>{cartStore.itemsInCart}</s.Badge>}
    </s.ControlItem>
  );
});

const WishIcon: React.FC = observer(() => {
  const { wishStore } = useStoreContext();

  return (
    <s.ControlItem>
      <s.ControlIcon
        src={wishStore.hasWishes ? WishActive : WishNotActive}
        alt="wish icon"
        role="button"
      />
    </s.ControlItem>
  );
});

const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const history = useHistory();

  return (
    <>
      <s.HeaderContainer>
        <s.HeaderBlock position="flex-start">
          <s.Burger
            onClick={() => setMenu(true)}
            src={Burger}
            alt="burger icon"
            role="button"
          />
        </s.HeaderBlock>

        <s.HeaderBlock position="center">
          <s.LogoLink
            onClick={() => history.push("/")}
            src={Logo}
            alt="logo"
            role="button"
          />
        </s.HeaderBlock>

        <s.HeaderBlock position="flex-end">
          <s.ControlGroup>
            <s.ControlItem>
              <s.ControlIcon
                src={SearchIcon}
                alt="search icon"
                role="button"
                onClick={() => setSearch(true)}
              />
            </s.ControlItem>
            <WishIcon />
            <CartIconWithBange />
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
