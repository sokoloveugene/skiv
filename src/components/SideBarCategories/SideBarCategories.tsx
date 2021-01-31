import React, { useState } from "react";
import { Plus, Minus } from "../../assets/icons";
import { CategoryI } from "./types";
import { Divider } from "../../ui";
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
            <React.Fragment key={c.title}>
              <s.CategoryItem>
                <s.SubCategoryLinkShift href={c.link}>
                  {c.title}
                </s.SubCategoryLinkShift>
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
        {mockedExtra.map(({ title, link }) => (
          <s.CategoryItem key={title}>
            <s.SubCategoryLink href={link}>{title}</s.SubCategoryLink>
          </s.CategoryItem>
        ))}
      </s.CategoriesContainer>
    </>
  );
};

export default SideBarCategories;
