import React, { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "store/storeContext";
import currency from "helpers/currencyFormatter";
import * as s from "./NotificationPortal.styled";

const NotificationPortal: React.FC = observer(() => {
  const portalDiv = document.getElementById("notification");
  const { cartStore } = useStoreContext();

  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onHide = useCallback(() => {
    cartStore.setNotification(null);
  }, [cartStore]);

  useEffect(() => {
    if (!cartStore.notification) return;

    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(onHide, 4000);
  }, [cartStore.notification, onHide]);

  return cartStore.notification && portalDiv
    ? ReactDOM.createPortal(
        <s.Container>
          <s.Title>1 ITEM ADDED TO YOUR CART </s.Title>
          <s.Wrapper>
            <s.Image src={cartStore.notification.image} alt="product" />
            <s.Info>
              <s.ProductTitle>{cartStore.notification.name}</s.ProductTitle>
              <s.AdditionalText>
                {cartStore.notification.sizeTitle}
              </s.AdditionalText>
              <s.AdditionalText>
                {currency(cartStore.notification.price)}
              </s.AdditionalText>
            </s.Info>
          </s.Wrapper>
        </s.Container>,
        portalDiv
      )
    : null;
});

export default NotificationPortal;
