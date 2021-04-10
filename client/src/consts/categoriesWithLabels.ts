interface OptionI {
  label: string;
  value: string;
}

export const CATEGORIES: OptionI[] = [
  { label: "Пальто та куртки", value: "jackets" },
  { label: "Костюми", value: "costumes" },
  { label: "Джинси", value: "jeans" },
  { label: "Спідниці", value: "skirts" },
  { label: "Брюки", value: "pants" },
  { label: "Сорочки", value: "shirts" },
  { label: "Плаття", value: "dress" },
];

export const TAGS: OptionI[] = [
  { label: "Новинки", value: "new" },
  { label: "SALE", value: "sale" },
];

export const ALL: OptionI = { label: "Все", value: "" };
