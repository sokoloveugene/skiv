import CartStore from "./cartStore";
import WishStore from "./wishStore";

class RootStore {
  cartStore: CartStore;

  wishStore: WishStore;

  constructor() {
    this.cartStore = new CartStore();
    this.wishStore = new WishStore();
  }
}

export default RootStore;
