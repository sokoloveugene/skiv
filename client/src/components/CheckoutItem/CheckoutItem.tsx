import React from "react";
import currency from "helpers/currencyFormatter";
import { useHistory } from "react-router-dom";
import { ProductI } from "types";
import * as s from "./CheckoutItem.styled";

interface CheckoutItemI {
  product: ProductI;
}

const CheckoutItem: React.FC<CheckoutItemI> = ({ product }) => {
  const history = useHistory();

  const handleRedirectToProduct = () => {
    history.push(`product/${product._id}`);
  };

  return (
    <>
      {product.sizes
        .filter((size) => size.ordered)
        .map((size) => {
          return (
            <s.Container key={size._id}>
              <s.MainContent>
                <s.ImageWrapper onClick={handleRedirectToProduct}>
                  <s.Image src={product.images[0]} alt="product" />
                </s.ImageWrapper>

                <div>
                  <s.Text>{product.name}</s.Text>
                  <s.Text>{size.title}</s.Text>
                </div>
              </s.MainContent>

              <s.Amount>{`x${size.ordered}`}</s.Amount>

              <s.Price>{currency(product.price)}</s.Price>
            </s.Container>
          );
        })}
    </>
  );
};

export default CheckoutItem;
