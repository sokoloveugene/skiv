import instance from "./instance";
import { ProductI, ProductWithSimilarI } from "../types";

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
  onLoad?: (data: ProductWithSimilarI) => void
): Promise<ProductWithSimilarI> => {
  const { data } = await instance.get<ProductWithSimilarI>(
    `/api/products/${id}`
  );
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

export const getProductByCategory = async (
  category: string,
  onLoad?: (data: ProductI[]) => void
): Promise<ProductI[]> => {
  const { data } = await instance.get<ProductI[]>(
    `/api/products/category/${category}`
  );
  if (data && onLoad) {
    onLoad(data);
  }
  return data;
};

export const getProductsBySearch = async (
  search: string,
  onLoad?: (data: ProductI[]) => void
): Promise<ProductI[]> => {
  const { data } = await instance.post<ProductI[]>("/api/products/find", {
    search,
  });
  if (data && onLoad) {
    onLoad(data);
  }
  return data;
};
