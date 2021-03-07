import React from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "store/storeContext";
import currency from "helpers/currencyFormatter";
import Button from "../Button";
import * as s from "./OrderInformation.styled";

const OrderInformation: React.FC = observer(() => {
  const { cartStore } = useStoreContext();
  const history = useHistory();

  const handleContinueShopping = () => {
    history.push("/catalog");
  };

  const handleCheckoutRedirect = () => {
    history.push({
      pathname: "/checkout",
      state: { fromCart: true },
    });
  };

  return (
    <s.Container>
      <s.Title>ІНФОРМАЦІЯ ПРО ЗАМОВЛЕННЯ</s.Title>
      <s.List>
        <s.ListRow>
          <s.Text>Вартість</s.Text>
          <s.Text>{currency(cartStore.totalCost)}</s.Text>
        </s.ListRow>
        <s.ListRow>
          <s.Text>Застосувати промокод</s.Text>
          <s.Text>-</s.Text>
        </s.ListRow>
        <s.ListRow>
          <s.Text>Всього</s.Text>
          <s.Text>{currency(3848)}</s.Text>
        </s.ListRow>
      </s.List>
      <Button
        title="Оформити замовлення"
        onClick={handleCheckoutRedirect}
        customMargin="42px 0px 22px 0px"
      />
      <Button
        inversion
        title="Продовжити покупки"
        onClick={handleContinueShopping}
      />
    </s.Container>
  );
});

export default OrderInformation;
