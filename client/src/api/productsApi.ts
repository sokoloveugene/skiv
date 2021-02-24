import instance from "./instance";

// TODO create data interface
type ProductInterface = any;

const fetchAllProducts = async () => {
  const { data } = await instance.get<ProductInterface[]>("/api/products");
  return data;
};
