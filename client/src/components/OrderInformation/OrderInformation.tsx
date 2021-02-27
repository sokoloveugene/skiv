import React from "react";
import * as s from "./OrderInformation.styled";
import currency from "../../helpers/currencyFormatter";
import Button from "../Button";

const OrderInformation: React.FC = () => {
  return (
    <s.Container>
      <s.Title>INFORMATION ABOUT ORDER</s.Title>
      <s.List>
        <s.ListRow>
          <s.Text>Cost of goods</s.Text>
          <s.Text>{currency(3798)}</s.Text>
        </s.ListRow>
        <s.ListRow>
          <s.Text>Discount</s.Text>
          <s.Text>-</s.Text>
        </s.ListRow>
        <s.ListRow>
          <s.Text>Total</s.Text>
          <s.Text>{currency(3848)}</s.Text>
        </s.ListRow>
      </s.List>
      <Button
        title="Checkout"
        onClick={() => null}
        customMargin="42px 0px 22px 0px"
        maxWidth="90%"
      />
      <Button title="Continue Shopping" onClick={() => null} maxWidth="90%" />
    </s.Container>
  );
};

export default OrderInformation;
