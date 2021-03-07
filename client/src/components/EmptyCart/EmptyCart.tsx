import React from "react";
import { useHistory } from "react-router-dom";
import { CartImage } from "assets/icons";
import Button from "components/Button";
import * as s from "./EmptyCart.styled";

const EmptyCart: React.FC = () => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push("/catalog");
  };

  return (
    <div>
      <s.ImageWrapper>
        <s.CartIllustration src={CartImage} alt="cart logo" />
      </s.ImageWrapper>
      <s.Text>Ваш кошик поки порожній.</s.Text>
      <Button
        customMargin="0px auto"
        title="Назад у магазин"
        onClick={handleRedirect}
      />
    </div>
  );
};

export default EmptyCart;
