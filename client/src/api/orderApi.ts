import { OrderI } from "types";
import instance from "./instance";

export const createOrderRequest = async (
  order: OrderI
): Promise<{ id: string }> => {
  const { data } = await instance.post("/api/orders/create", order);

  return data;
};

export const test = "test";
