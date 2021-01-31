import { CategoryI, SubCategoryI } from "./types";

const mokedCategories: CategoryI[] = [
  { category: "Новинки", childs: null },
  {
    category: "Одяг",
    childs: [
      {
        title: "Все",
        link: "#",
      },
      {
        title: "Пальто та куртки",
        link: "#",
      },
      {
        title: "Костюми",
        link: "#",
      },
      {
        title: "Спідниці",
        link: "#",
      },
      {
        title: "Брюки",
        link: "#",
      },
      {
        title: "Сорочки",
        link: "#",
      },
    ],
  },
  { category: "Sale", childs: null },
];

const mockedExtra: SubCategoryI[] = [
  { title: "Доставка і оплата", link: "#" },
  { title: "Повернення та обмін", link: "#" },
];

export { mokedCategories, mockedExtra };
