import React from "react";
import currency from "../../helpers/currencyFormatter";
import * as s from "./ShoppingCartItem.styled";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import { ReactComponent as Minus } from "../../assets/icons/Minus.svg";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";

interface CartItemI {
  product: {
    id: string;
    image: string;
    tag: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
  };
}

const ShoppingCartItem: React.FC<CartItemI> = ({ product }) => {
  return (
    <s.Row>
      <s.ProductMainInfo>
        <s.ImageWrapper>
          <s.Image src={product.image} alt="product" />
        </s.ImageWrapper>
        <s.TitleContainer>
          <s.Title>{product.name}</s.Title>
          <s.Title>{product.size}</s.Title>
        </s.TitleContainer>
      </s.ProductMainInfo>
      <s.Сentered>
        <s.Number>{currency(product.price)}</s.Number>
      </s.Сentered>
      <s.QuantityContainer>
        <s.QuntityControl type="button">
          <Minus />
        </s.QuntityControl>
        <s.Number>{product.quantity}</s.Number>
        <s.QuntityControl type="button">
          <Plus />
        </s.QuntityControl>
      </s.QuantityContainer>
      <s.Сentered>
        <s.Number>{currency(product.price * product.quantity)}</s.Number>
      </s.Сentered>
      <s.CloseButton role="button">
        <Close />
      </s.CloseButton>
    </s.Row>
  );
};

export default ShoppingCartItem;
