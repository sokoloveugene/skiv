import ProductStore from "./productStore";
import WishStore from "./wishStore";
import CartStore from "./cartStore";
import AuthStore from "./authStore";

class RootStore {
  cartStore: CartStore;

  wishStore: WishStore;

  productStore: ProductStore;

  authStore: AuthStore;

  constructor() {
    this.wishStore = new WishStore();
    this.productStore = new ProductStore();
    this.cartStore = new CartStore(this.productStore);
    this.authStore = new AuthStore();
  }
}

export default RootStore;
