import React, { useRef } from "react";
import useCopyElementTextContent from "hooks/useCopyElementTextContent";
import { ReactComponent as Copy } from "assets/icons/Copy.svg";
import Button from "components/Button";
import * as s from "./OrderCreatedInfoPopup.styled";

interface OrderCreatedPopupI {
  id: string;
  onClose: () => void;
}

const OrderCreatedInfoPopup: React.FC<OrderCreatedPopupI> = ({
  id,
  onClose,
}) => {
  const idRef = useRef<HTMLParagraphElement | null>(null);

  const { handleCopy } = useCopyElementTextContent(idRef);

  return (
    <div>
      <s.Text>Ваше замовлення прийнято дякуємо</s.Text>

      <s.OrderNumberContainer>
        <s.Text ref={idRef}>{id}</s.Text>

        <s.CopyButton type="button" onClick={handleCopy}>
          <Copy />
        </s.CopyButton>
      </s.OrderNumberContainer>

      <Button
        customPadding="4px 10px"
        onClick={onClose}
        title="Назад у магазин"
      />
    </div>
  );
};

export default OrderCreatedInfoPopup;
