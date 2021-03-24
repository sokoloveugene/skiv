import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "store/storeContext";
import { Divider } from "ui/ui.styled";
import EmptyCart from "components/EmptyCart";
import OrderInformation from "components/OrderInformation";
import ShoppingCartItem from "components/ShoppingCartItem";
import * as s from "./Cart.styled";

const headers = ["Продукт", "Цiна", "Кiлькiсть", "Всього"];

const Cart: React.FC = observer(() => {
  const { cartStore } = useStoreContext();

  useEffect(() => {
    cartStore.fetchCartProducts();
  }, [cartStore]);

  if (cartStore.cartDataLoading) return null;

  return (
    <>
      <s.PageTitle>Кошик</s.PageTitle>

      {cartStore.cartData.length ? (
        <s.Wrapper>
          <s.CartItemsContainer>
            <s.Row>
              {headers.map((h, idx) => (
                <s.KeyWrapper key={h}>
                  {idx !== 0 ? (
                    <s.Сentered>
                      <s.HeaderTitle>{h}</s.HeaderTitle>
                    </s.Сentered>
                  ) : (
                    <s.HeaderTitle>{h}</s.HeaderTitle>
                  )}
                </s.KeyWrapper>
              ))}
            </s.Row>

            <Divider customMargin="27px 0px 10px 0px" />

            {cartStore.cartData.map((item) => (
              <ShoppingCartItem key={item._id} product={item} />
            ))}
          </s.CartItemsContainer>
          <s.OrderInformationWrapper>
            <OrderInformation />
          </s.OrderInformationWrapper>
        </s.Wrapper>
      ) : (
        <EmptyCart />
      )}
    </>
  );
});

export default Cart;
