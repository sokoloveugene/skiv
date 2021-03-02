// eslint-disable-next-line
export const parseQuery = (search: string, query: string) => {
  const params = new URLSearchParams(search);
  return params.get(query) || "";
};
