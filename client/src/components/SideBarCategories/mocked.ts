import { ALL, CATEGORIES } from "consts/categoriesWithLabels";
import { CategoryI, SubCategoryI } from "./types";

// TODO use unified data
const mokedCategories: CategoryI[] = [
  { category: "Новинки", childs: null },
  {
    category: "Одяг",
    childs: [ALL, ...CATEGORIES],
  },
  { category: "Sale", childs: null },
];

const mockedExtra: SubCategoryI[] = [
  { label: "Доставка і оплата", value: "#" },
  { label: "Повернення та обмін", value: "#" },
];

export { mokedCategories, mockedExtra };
