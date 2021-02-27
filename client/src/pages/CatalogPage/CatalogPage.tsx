import React from "react";
// import ItemCard from "../../components/ItemCard";
import SideNavigation from "../../components/SideNavigation";
import * as s from "./CatalogPage.styled";
// import { testProducts } from "../../mockData";

const CatalogPage: React.FC = () => {
  return (
    <s.Container>
      <s.Navigation>
        <SideNavigation />
      </s.Navigation>
      <s.Content>
        <s.CardsWrapper>
          {/* {testProducts.map((product) => (
            <ItemCard key={product.id} item={product} />
          ))} */}
        </s.CardsWrapper>
      </s.Content>
    </s.Container>
  );
};

export default CatalogPage;
