// eslint-disable-next-line
import CartStore from "./cartStore";
import ProductStore from "./productStore";
import WishStore from "./wishStore";

class RootStore {
  cartStore: CartStore;

  wishStore: WishStore;

  productStore: ProductStore;

  constructor() {
    this.cartStore = new CartStore(this);
    this.wishStore = new WishStore();
    this.productStore = new ProductStore();
  }
}

export default RootStore;
