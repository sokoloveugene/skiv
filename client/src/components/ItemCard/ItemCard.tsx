import React from "react";
import { useHistory } from "react-router-dom";
import currency from "../../helpers/currencyFormatter";
import { ProductI } from "../../types";
import ProportionWrapper from "../ProportionWrapper/ProportionWrapper";
import * as s from "./ItemCard.styled";

interface ItemCardI {
  item: ProductI;
}

const ItemCard: React.FC<ItemCardI> = ({ item }) => {
  const history = useHistory();

  const handleRedirect = (id: string) => {
    history.push(`/product/${id}`);
  };

  return (
    <s.Card key={item._id} onClick={() => handleRedirect(item._id)}>
      <ProportionWrapper horizontalRation={374} verticatRation={500}>
        <s.Image src={item.image[0]} />
      </ProportionWrapper>
      <s.Tag>{item.tag}</s.Tag>
      <s.Name>{item.name}</s.Name>
      <s.Price>{currency(item.price)}</s.Price>
    </s.Card>
  );
};

export default ItemCard;
