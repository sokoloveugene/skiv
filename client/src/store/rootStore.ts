// eslint-disable-next-line
import CartStore from "./cartStore";
import ProductStore from "./productStore";
import WishStore from "./wishStore";
import AuthStore from "./authStore";

class RootStore {
  cartStore: CartStore;

  wishStore: WishStore;

  productStore: ProductStore;

  authStore: AuthStore;

  constructor() {
    this.cartStore = new CartStore(this);
    this.wishStore = new WishStore();
    this.productStore = new ProductStore();
    this.authStore = new AuthStore();
  }
}

export default RootStore;
