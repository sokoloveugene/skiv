import instance from "./instance";
import { ProductI } from "../types";

export const getAllProducts = async (
  onLoad?: (data: ProductI[]) => void
): Promise<ProductI[]> => {
  const { data } = await instance.get<ProductI[]>("/api/products");
  if (data && onLoad) {
    onLoad(data);
  }
  return data;
};

export const getProductById = async (
  id: string,
  onLoad?: (data: ProductI) => void
): Promise<ProductI> => {
  const { data } = await instance.get<ProductI>(`/api/products/${id}`);
  if (data && onLoad) {
    onLoad(data);
  }
  return data;
};

export const getProductsByIds = async (
  ids: Array<string>,
  onLoad?: (data: ProductI[]) => void
): Promise<ProductI[]> => {
  const { data } = await instance.post<ProductI[]>(`/api/products/byIds`, {
    ids,
  });
  if (data && onLoad) {
    onLoad(data);
  }
  return data || [];
};
