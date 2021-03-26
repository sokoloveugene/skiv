import { AuthResponseI, LoginCredentialsI } from "types";
import instance from "./instance";

export const loginRequest = async (
  user: LoginCredentialsI
): Promise<AuthResponseI> => {
  const { data } = await instance.post<AuthResponseI>("/api/auth/signIn", user);

  return data;
};

export const checkAuthenticationRequest = async (): Promise<AuthResponseI> => {
  const { data } = await instance.get<AuthResponseI>("/api/auth/isAuth");

  return data;
};

export const logOutRequest = async (): Promise<AuthResponseI> => {
  const { data } = await instance.post<AuthResponseI>("/api/auth/logOut");

  return data;
};
