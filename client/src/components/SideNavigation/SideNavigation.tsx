import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { parseQuery } from "../../helpers/parseQuery";
import * as s from "./SideNavigation.styled";

const links = [
  { title: "Все", query: "all" },
  { title: "Пальто та куртки", query: "jackets" },
  { title: "Костюми", query: "costumes" },
  { title: "Джинси", query: "jeans" },
  { title: "Спідниці", query: "skirts" },
  { title: "Брюки", query: "pants" },
  { title: "Сорочки", query: "shirts" },
  { title: "Плаття", query: "dress" },
  { title: "Новинки", query: "new" },
  { title: "SALE", query: "sale" },
];

const SideNavigation: React.FC = () => {
  const { search } = useLocation();

  const [category, setCategory] = useState(
    parseQuery(search, "category") || "all"
  );

  const history = useHistory();

  const handleSelectCategory = (query: string): void => {
    setCategory(query);
    // TODO push via new URL
    history.push(`?category=${query}`);
  };

  return (
    <s.NavigationList>
      {links.map((l) => (
        <s.NavigationLink
          key={l.title}
          onClick={() => handleSelectCategory(l.query)}
          active={l.query === category}
        >
          {l.title}
        </s.NavigationLink>
      ))}
    </s.NavigationList>
  );
};

export default SideNavigation;
