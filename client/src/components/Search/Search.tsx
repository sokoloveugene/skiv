import React, { useState } from "react";
import useOutsideAction from "hooks/useClickOutside";
import { ReactComponent as SearchIcon } from "assets/icons/SearchIcon.svg";
import * as s from "./Search.styled";

interface SearchI {
  onClose: () => void;
}

const Search: React.FC<SearchI> = ({ onClose }) => {
  const [search, setSearch] = useState("");
  const [contentRef] = useOutsideAction(onClose);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
