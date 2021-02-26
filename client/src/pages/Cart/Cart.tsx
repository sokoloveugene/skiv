import React from "react";
import ShoppingCartItem from "../../components/ShoppingCartItem";
import * as s from "./Cart.styled";
import { Divider } from "../../ui/ui.styled";
import { testCart } from "../../mockData";
import OrderInformation from "../../components/OrderInformation";

const headers = ["Продукт", "Цiна", "Кiлькiсть", "Всього"];

const Cart = () => {
  return (
    <>
      <s.PageTitle>Shopping cart</s.PageTitle>

      <s.Wrapper>
        <s.CartItemsContainer>
          <s.Row>
            {headers.map((h, idx) => (
              <>
                {idx !== 0 ? (
                  <s.Сentered>
                    <s.HeaderTitle key={h}>{h}</s.HeaderTitle>
                  </s.Сentered>
                ) : (
                  <s.HeaderTitle key={h}>{h}</s.HeaderTitle>
                )}
              </>
            ))}
          </s.Row>

          <Divider customMargin="27px 0px 10px 0px" />

          {testCart.map((item) => {
            return (
              <>
                <ShoppingCartItem product={item} />
                <Divider customMargin="11px 0px" />
              </>
            );
          })}
        </s.CartItemsContainer>

        <OrderInformation />
      </s.Wrapper>
    </>
  );
};

export default Cart;
