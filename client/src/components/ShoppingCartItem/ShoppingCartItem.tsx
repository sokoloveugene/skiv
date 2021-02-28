import React from "react";
import currency from "../../helpers/currencyFormatter";
import * as s from "./ShoppingCartItem.styled";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import { ReactComponent as Minus } from "../../assets/icons/Minus.svg";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import { Divider } from "../../ui/ui.styled";
import { ProductI } from "../../types";

interface ShoppingCartItemI {
  product: ProductI;
}

const ShoppingCartItem: React.FC<ShoppingCartItemI> = ({ product }) => {
  return (
    <>
      {product.sizes.map((size) => {
        if (!size.ordered) return null;

        return (
          <>
            <s.Row>
              <s.ProductMainInfo>
                <s.ImageWrapper>
                  <s.Image src={product.image[0]} alt="product" />
                </s.ImageWrapper>
                <s.TitleContainer>
                  <s.Title>{product.name}</s.Title>
                  <s.Title>{size.title}</s.Title>
                </s.TitleContainer>
              </s.ProductMainInfo>
              <s.Сentered>
                <s.Number>{currency(product.price)}</s.Number>
              </s.Сentered>
              <s.QuantityContainer>
                <s.QuntityControl type="button">
                  <Minus />
                </s.QuntityControl>
                <s.Number>{size.ordered}</s.Number>
                <s.QuntityControl type="button">
                  <Plus />
                </s.QuntityControl>
              </s.QuantityContainer>
              <s.Сentered>
                <s.Number>
                  {currency(product.price * Number(size.ordered))}
                </s.Number>
              </s.Сentered>
              <s.CloseButton role="button">
                <Close />
              </s.CloseButton>
            </s.Row>
            <Divider customMargin="11px 0px" />
          </>
        );
      })}
    </>
  );
};

export default ShoppingCartItem;
