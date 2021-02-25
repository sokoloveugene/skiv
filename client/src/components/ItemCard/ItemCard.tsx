import React from "react";
import currency from "../../helpers/currencyFormatter";
import ProportionWrapper from "../ProportionWrapper/ProportionWrapper";
import * as s from "./ItemCard.styled";

interface Item {
  id: string;
  image: string;
  tag: string | null;
  name: string;
  price: number;
}

interface ItemCardI {
  item: Item;
}

const ItemCard: React.FC<ItemCardI> = ({ item }) => {
  return (
    <s.Card key={item.id}>
      <ProportionWrapper horizontalRation={374} verticatRation={500}>
        <s.Image src={item.image} />
      </ProportionWrapper>
      <s.Tag>{item.tag}</s.Tag>
      <s.Name>{item.name}</s.Name>
      <s.Price>{currency(item.price)}</s.Price>
    </s.Card>
  );
};

export default ItemCard;
