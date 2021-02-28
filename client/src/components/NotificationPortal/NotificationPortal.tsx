import React from "react";
import ReactDOM from "react-dom";
import currency from "../../helpers/currencyFormatter";
import * as s from "./NotificationPortal.styled";

interface NotificationPortalI {
  open: boolean;
  // onClose?: () => void;
}

const NotificationPortal: React.FC<NotificationPortalI> = ({
  open,
  // onClose,
}) => {
  const portalDiv = document.getElementById("notification");

  return open && portalDiv
    ? ReactDOM.createPortal(
        <s.Container>
          <s.Title>1 ITEM(S) ADDED TO YOUR CART </s.Title>
          <s.Wrapper>
            <s.Image src="" alt="product" />
            <s.Info>
              <s.ProductTitle>Coats and Jackets</s.ProductTitle>
              <s.AdditionalText>XS</s.AdditionalText>
              <s.AdditionalText>{currency(1213)}</s.AdditionalText>
            </s.Info>
          </s.Wrapper>
        </s.Container>,
        portalDiv
      )
    : null;
};

export default NotificationPortal;
