// eslint-disable-next-line
export const parseQuery = (search: string, query: string) => {
  const category =
    search
      .replace("?", "")
      .split("&")
      .filter((param) => param.includes(query))[0] || "";
  return category.split("=")[1];
};
