import { makeAutoObservable } from "mobx";
import { checkAuthenticationRequest } from "api/authApi";
import { AuthResponseI } from "types";

class AuthStore {
  isAuth: boolean;

  constructor() {
    makeAutoObservable(this);
    this.isAuth = false;
    this.checkAuthentication();
  }

  setAuth(authStatus: boolean): void {
    this.isAuth = authStatus;
  }

  async checkAuthentication(): Promise<AuthResponseI> {
    const resData = await checkAuthenticationRequest();
    this.isAuth = resData.isAuthenticated;

    return resData;
  }
}

export default AuthStore;
