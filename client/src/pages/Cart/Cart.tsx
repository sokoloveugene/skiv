import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ShoppingCartItem from "../../components/ShoppingCartItem";
import * as s from "./Cart.styled";
import { Divider } from "../../ui/ui.styled";
import OrderInformation from "../../components/OrderInformation";
import { useStoreContext } from "../../store/storeContext";

const headers = ["Продукт", "Цiна", "Кiлькiсть", "Всього"];

const Cart: React.FC = observer(() => {
  const { cartStore } = useStoreContext();

  useEffect(() => {
    cartStore.fetchCartProducts();
  }, [cartStore]);

  return (
    <>
      <s.PageTitle>Shopping cart</s.PageTitle>

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

          {cartStore.cartData.map((item) => {
            return <ShoppingCartItem key={item._id} product={item} />;
          })}
        </s.CartItemsContainer>

        <OrderInformation />
      </s.Wrapper>
    </>
  );
});

export default Cart;
