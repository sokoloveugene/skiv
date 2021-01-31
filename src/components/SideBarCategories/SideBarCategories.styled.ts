import styled from "styled-components";
import colors from "../../consts/colors";

export const InlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
`;

export const CategoriesContainer = styled.ul`
  list-style: none;
`;

export const CategoriesContainerFull = styled(CategoriesContainer)`
  margin-bottom: auto;
`;

export const CategoryItem = styled.li``;

const Link = styled.a`
  text-decoration: none;
  color: ${colors.white};
  display: block;
  cursor: pointer;
`;

export const CategoryLink = styled(Link)`
  font-size: 24px;
`;

export const SubCategoryLinkShift = styled(Link)`
  font-size: 18px;
  padding-left: 8px;
`;

export const SubCategoryLink = styled(Link)`
  font-size: 18px;
  line-height: 27px;
  &:last-child {
    margin-bottom: 20px;
  }
`;

export const ToggleIcon = styled.img`
  height: 15px;
  width: 15px;
`;
