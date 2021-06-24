import useCopyElementTextContent from "hooks/useCopyElementTextContent";
import React, { useRef } from "react";
// import styled from "styled-components";

interface OrderCreatedPopupI {
  id: string;
}

const OrderCreatedInfo: React.FC<OrderCreatedPopupI> = ({ id }) => {
  const idRef = useRef<HTMLSpanElement | null>(null);

  const { handleCopy } = useCopyElementTextContent(idRef);

  return (
    <div>
      <p>Ваше замовлення прийнято дякуємо</p>
      <span ref={idRef}>{id}</span>
      <button type="button" onClick={handleCopy}>
        copyToClipboard
      </button>
    </div>
  );
};

export default OrderCreatedInfo;
