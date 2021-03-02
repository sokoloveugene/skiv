import React from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "assets/icons/Close.svg";
import { ReactComponent as Minus } from "assets/icons/Minus.svg";
import { ReactComponent as Plus } from "assets/icons/Plus.svg";
import { Divider } from "ui/ui.styled";
import { ProductI } from "types";
import { useStoreContext } from "store/storeContext";
import currency from "helpers/currencyFormatter";
import * as s from "./ShoppingCartItem.styled";

interface ShoppingCartItemI {
  product: ProductI;
}

const ShoppingCartItem: React.FC<ShoppingCartItemI> = observer(
  ({ product }) => {
    const { cartStore } = useStoreContext();

    const history = useHistory();

    const handleRedirectToProduct = () => {
      history.push(`product/${product._id}`);
    };

    return (
      <>
        {product.sizes.map((size) => {
          if (!size.ordered) return null;

          return (
            <s.KeyWrapper key={size._id}>
              <s.Row>
                <s.ProductMainInfo>
                  <s.ImageWrapper onClick={handleRedirectToProduct}>
                    <s.Image src={product.images[0]} alt="product" />
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
                  <s.QuntityControl
                    type="button"
                    onClick={() => cartStore.removeOne(product._id, size._id)}
                  >
                    <Minus />
                  </s.QuntityControl>
                  <s.Number>{size.ordered}</s.Number>
                  <s.QuntityControl
                    type="button"
                    onClick={() => cartStore.addOne(product._id, size._id)}
                  >
                    <Plus />
                  </s.QuntityControl>
                </s.QuantityContainer>
                <s.Сentered>
                  <s.Number>
                    {currency(product.price * Number(size.ordered))}
                  </s.Number>
                </s.Сentered>
                <s.CloseButton
                  role="button"
                  onClick={() => cartStore.removeAll(product._id, size._id)}
                >
                  <Close />
                </s.CloseButton>
              </s.Row>
              <Divider customMargin="11px 0px" />
            </s.KeyWrapper>
          );
        })}
      </>
    );
  }
);

export default ShoppingCartItem;
