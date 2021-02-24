import React from "react";
import { SearchIcon } from "../../assets/icons";
import * as s from "./Search.styled";

const Search: React.FC = () => {
  return (
    <s.ShadowBlur>
      <s.Container>
        <s.SearchInput type="text" placeholder="Пошук..." />
        <s.SearchIcon
          src={SearchIcon}
          alt="search icon"
          role="button"
          onClick={() => null}
        />
      </s.Container>
    </s.ShadowBlur>
  );
};

export default Search;
