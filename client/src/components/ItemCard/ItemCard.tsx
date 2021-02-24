import React from "react";
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
      {/* <s.WrapperProportion>
        <s.WrapperProportionInner>
          <s.Image src={item.image} />
        </s.WrapperProportionInner>
      </s.WrapperProportion> */}
      <s.Tag>{item.tag}</s.Tag>
      <s.Name>{item.name}</s.Name>
      <s.Price>₴ {item.price}</s.Price>
    </s.Card>
  );
};

export default ItemCard;
