import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { getProductsBySearch } from "api/productsApi";
import { useStoreContext } from "store/storeContext";
import { parseQuery } from "helpers/parseQuery";
import { useLocation } from "react-router-dom";
import { ProductI } from "types";
import ItemCard from "components/ItemCard";
import Breadcrumbs from "components/Breadcrumbs";
import * as s from "./SearchPage.styled";

const SearchPage: React.FC = observer(() => {
  const { search } = useLocation();
  const { productStore } = useStoreContext();

  useEffect(() => {
    const onLoad = (products: ProductI[]): void => {
      productStore.setSearchResults(products);
    };
    const searchQuery = parseQuery(search, "search");
    getProductsBySearch(searchQuery, onLoad);

    return () => productStore.setSearchResults([]);
  }, [search, productStore]);

  return (
    <>
      <Breadcrumbs />

      <s.GridLayout>
        {productStore.searchResults.map((product) => (
          <ItemCard key={product._id} item={product} />
        ))}
      </s.GridLayout>
    </>
  );
});

export default SearchPage;
