import { makeAutoObservable } from "mobx";
import { getLocalStorage } from "helpers/localStorage";

class WishStore {
  wishList: string[];

  constructor() {
    makeAutoObservable(this);
    this.wishList = getLocalStorage("wishList", []);
  }

  addToWishList(id: string): void {
    if (this.isWish(id)) return;
    this.wishList.push(id);
  }

  removeFromWishList(id: string): void {
    this.wishList = this.wishList.filter((wishId) => wishId !== id);
  }

  isWish(id: string): boolean {
    return this.wishList.includes(id);
  }

  get hasWishes(): boolean {
    return !!this.wishList.length;
  }
}

export default WishStore;
