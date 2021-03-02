import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { getProductByCategory } from "api/productsApi";
import { parseQuery } from "helpers/parseQuery";
import { useStoreContext } from "store/storeContext";
import ItemCard from "components/ItemCard";
import SideNavigation from "components/SideNavigation";
import SortSelector from "components/SortSelector";
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

  const onClean = useCallback(() => {
    productStore.setCategoryProducts([]);
  }, [productStore]);

  useEffect(() => {
    const category = parseQuery(search, "category");
    const sortBy = parseQuery(search, "sortBy");
    getProductByCategory({ category, sortBy }, onLoad);

    return onClean;
  }, [search, onLoad, onClean]);

  return (
    <s.Container>
      <s.Navigation>
        <SideNavigation />
      </s.Navigation>
      <s.Content>
        <SortSelector />
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
