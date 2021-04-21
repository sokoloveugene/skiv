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
  ids: string[],
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
  params: { category: string; sortBy: string },
  onLoad?: (data: ProductI[]) => void
): Promise<ProductI[]> => {
  const { data } = await instance.post<ProductI[]>("/api/products/catalog", {
    category: params.category,
    sortBy: params.sortBy || "date",
  });
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

export const createProduct = async (product: FormData): Promise<string> => {
  const { data } = await instance({
    method: "post",
    url: "/api/products/createProduct",
    data: product,
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};

export const updateProduct = async (
  updatedProduct: FormData,
  productId: string
): Promise<string> => {
  const { data } = await instance({
    method: "put",
    url: `/api/products/update/${productId}`,
    data: updatedProduct,
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};
