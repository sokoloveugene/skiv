import CartStore from "./cartStore";

class RootStore {
  cartStore: CartStore;

  constructor() {
    this.cartStore = new CartStore();
  }
}

export default RootStore;
