import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { getProductsBySearch } from "api/productsApi";
import { useStoreContext } from "store/storeContext";
import { parseQuery } from "helpers/parseQuery";
import { useLocation } from "react-router-dom";
import { ProductI } from "types";

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

  return <div>{JSON.stringify(productStore.searchResults)}</div>;
});

export default SearchPage;
