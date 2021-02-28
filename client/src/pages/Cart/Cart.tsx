import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ShoppingCartItem from "../../components/ShoppingCartItem";
import * as s from "./Cart.styled";
import { Divider } from "../../ui/ui.styled";
// import { testCart } from "../../mockData";
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

          {cartStore.cartData.map((item) => {
            return (
              <>
                <ShoppingCartItem product={item} />
              </>
            );
          })}
        </s.CartItemsContainer>

        <OrderInformation />
      </s.Wrapper>
    </>
  );
});

export default Cart;
