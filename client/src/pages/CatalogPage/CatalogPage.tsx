import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { getProductByCategory } from "api/productsApi";
import { parseQuery } from "helpers/parseQuery";
import { useStoreContext } from "store/storeContext";
import ItemCard from "components/ItemCard";
import SideNavigation from "components/SideNavigation";
import { ProductI } from "types";
import * as s from "./CatalogPage.styled";

const CatalogPage: React.FC = observer(() => {
  const { search } = useLocation();
  const { productStore } = useStoreContext();

  const onLoad = useCallback(
    (products: Array<ProductI>): void => {
      productStore.setCategoryProducts(products);
    },
    [productStore]
  );

  useEffect(() => {
    const category = parseQuery(search, "category");
    getProductByCategory(category, onLoad);
  }, [search, onLoad]);

  return (
    <s.Container>
      <s.Navigation>
        <SideNavigation />
      </s.Navigation>
      <s.Content>
        <s.CardsWrapper>
          {productStore.categoryProducts.map((product) => (
            <ItemCard key={product._id} item={product} />
          ))}
        </s.CardsWrapper>
      </s.Content>
    </s.Container>
  );
});

export default CatalogPage;
