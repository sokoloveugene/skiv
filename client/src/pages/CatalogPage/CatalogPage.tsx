import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import ItemCard from "../../components/ItemCard";
import { colors } from "../../consts/colors";
import { parseQuery } from "../../helpers/parseQuery";
import { testProducts } from "../../mockData";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SideNavigation = styled.div`
  flex-basis: 220px;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export const NavigationList = styled.ul`
  list-style: none;
`;

export const NavigationLink = styled.li<{ active: boolean }>`
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.brown};
  font-weight: ${(props) => props.active && 800};
  cursor: pointer;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

const links = [
  { title: "Все", link: "all" },
  { title: "Пальто та куртки", link: "jackets" },
  { title: "Костюми", link: "costumes" },
  { title: "Джинси", link: "jeans" },
  { title: "Спідниці", link: "skirts" },
  { title: "Брюки", link: "pants" },
  { title: "Сорочки", link: "shirts" },
  { title: "Плаття", link: "dress" },
  { title: "Новинки", link: "new" },
  { title: "SALE", link: "sale" },
];

const CatalogPage: React.FC = () => {
  const { search } = useLocation();

  const [category, setCategory] = useState(
    parseQuery(search, "category") || "all"
  );

  const history = useHistory();

  const handleSelectCategory = (link: string): void => {
    setCategory(link);
    history.push(`?category=${link}`);
  };

  return (
    <Container>
      <SideNavigation>
        <NavigationList>
          {links.map((l) => (
            <NavigationLink
              key={l.title}
              onClick={() => handleSelectCategory(l.link)}
              active={l.link === category}
            >
              {l.title}
            </NavigationLink>
          ))}
        </NavigationList>
      </SideNavigation>
      <ContentWrapper>
        <CardsWrapper>
          {testProducts.map((product) => (
            <ItemCard key={product.id} item={product} />
          ))}
        </CardsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default CatalogPage;
