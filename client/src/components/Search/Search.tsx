import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";
import useOutsideAction from "../../hooks/useClickOutside";
import * as s from "./Search.styled";

interface SearchI {
  onClose: () => any;
}

const Search: React.FC<SearchI> = ({ onClose }) => {
  const [search, setSearch] = useState("");
  const [contentRef] = useOutsideAction(onClose);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearch(value);
  };

  return (
    <s.ShadowBlur>
      <s.Container ref={contentRef}>
        <s.Form onSubmit={handleSearch}>
          <s.SearchInput
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Пошук..."
          />
          <s.IconWrapper type="submit">
            <SearchIcon />
          </s.IconWrapper>
        </s.Form>
      </s.Container>
    </s.ShadowBlur>
  );
};

export default Search;
