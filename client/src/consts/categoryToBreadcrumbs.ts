// eslint-disable-next-line
export const getBreadcrumb = (category: string): string => {
  switch (category) {
    case "all":
      return "Все";
    case "jackets":
      return "Пальто та куртки";
    case "costumes":
      return "Костюми";
    case "jeans":
      return "Джинси";
    case "skirts":
      return "Спідниці";
    case "pants":
      return "Брюки";
    case "shirts":
      return "Сорочки";
    case "dress":
      return "Плаття";
    case "new":
      return "Новинки";
    case "SALE":
      return "sale";
    default:
      return "";
  }
};
