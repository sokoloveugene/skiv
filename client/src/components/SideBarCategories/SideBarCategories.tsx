import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "assets/icons";
import { Divider } from "ui/ui.styled";
import { CategoryI } from "./types";
import { mokedCategories, mockedExtra } from "./mocked";
import * as s from "./SideBarCategories.styled";

const Category: React.FC<CategoryI> = ({ category, childs }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setOpen((p) => !p);
  };

  return (
    <s.CategoryItem>
      <s.InlineWrapper onClick={toggle}>
        <s.CategoryLink>{category}</s.CategoryLink>

        {childs && (
          <s.ToggleIcon src={open ? Minus : Plus} alt="contol button" />
        )}
      </s.InlineWrapper>

      <s.CategoriesContainer>
        {childs &&
          open &&
          childs.map((c) => (
            <React.Fragment key={c.label}>
              <s.CategoryItem>
                <Link to={`catalog?category=${c.value}`}>
                  <s.SubCategoryLinkShift>{c.label}</s.SubCategoryLinkShift>
                </Link>
              </s.CategoryItem>
              <Divider />
            </React.Fragment>
          ))}
      </s.CategoriesContainer>
    </s.CategoryItem>
  );
};

const SideBarCategories: React.FC = () => {
  return (
    <>
      <s.CategoriesContainerFull>
        {mokedCategories.map(({ category, childs }) => (
          <Category key={category} category={category} childs={childs} />
        ))}
      </s.CategoriesContainerFull>

      <s.CategoriesContainer>
        {mockedExtra.map(({ label, value }) => (
          <s.CategoryItem key={label}>
            <Link to={value}>
              <s.SubCategoryLink>{label}</s.SubCategoryLink>
            </Link>
          </s.CategoryItem>
        ))}
      </s.CategoriesContainer>
    </>
  );
};

export default SideBarCategories;
