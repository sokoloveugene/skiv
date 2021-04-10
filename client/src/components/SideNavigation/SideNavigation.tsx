import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { parseQuery } from "helpers/parseQuery";
import { CATEGORIES, TAGS, ALL } from "consts/categoriesWithLabels";
import * as s from "./SideNavigation.styled";

const links = [ALL, ...CATEGORIES, ...TAGS].map(({ label, value }) => ({
  title: label,
  query: value,
}));

const SideNavigation: React.FC = () => {
  const { search } = useLocation();

  const [category, setCategory] = useState(
    parseQuery(search, "category") || ""
  );

  const history = useHistory();

  const handleSelectCategory = (query: string): void => {
    setCategory(query);

    const searchParams = new URLSearchParams(search);
    searchParams.set("category", query);

    history.push({
      pathname: "/catalog",
      search: searchParams.toString(),
    });
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
