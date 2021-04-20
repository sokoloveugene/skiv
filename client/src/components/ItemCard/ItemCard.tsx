import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useWish } from "hooks/useWish";
import { ProductI } from "types";
import { WishActive, WishNotActive } from "assets/icons";
import currency from "helpers/currencyFormatter";
import ProportionWrapper from "../ProportionWrapper/ProportionWrapper";
import * as s from "./ItemCard.styled";

interface ItemCardI {
  item: ProductI;
}

const ItemCard: React.FC<ItemCardI> = ({ item }) => {
  const history = useHistory();
  const iconRef = useRef<HTMLImageElement>(null);
  const [isWished, wishHandler] = useWish(item._id);

  const handleRedirect = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    if (e.target === iconRef.current) {
      wishHandler();
      return;
    }
    history.push(`/product/${id}`);
  };

  return (
    <s.Card key={item._id} onClick={(e) => handleRedirect(e, item._id)}>
      <ProportionWrapper horizontalRation={374} verticatRation={500}>
        <s.Image src={item.images[0]} />
        <s.ControlIcon
          ref={iconRef}
          src={isWished ? WishActive : WishNotActive}
          alt="wish icon"
          role="button"
        />
        <s.Tag>{item.tag}</s.Tag>
      </ProportionWrapper>
      <s.Name>{item.name}</s.Name>
      <s.Price>{currency(item.price)}</s.Price>
    </s.Card>
  );
};

export default ItemCard;
