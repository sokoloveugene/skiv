import { makeAutoObservable } from "mobx";
import { getLocalStorage, setLocalStorage } from "../helpers/localStorage";
import { SizeOptionI } from "../types";

interface SelectedProductI {
  _id: string;
  size: SizeOptionI;
  amount: number;
}

class CartStore {
  cart: SelectedProductI[];

  constructor() {
    makeAutoObservable(this);
    this.cart = getLocalStorage("cart", []);
  }

  addToCart(_id: string, size?: SizeOptionI | null): void {
    if (!_id || !size || !size.available) return;

    const sameProduct = this.cart.find(
      (cartItem) => cartItem._id === _id && cartItem.size?._id === size._id
    );

    if (sameProduct && sameProduct.size.available > sameProduct.amount) {
      sameProduct.amount += 1;
    }

    if (!sameProduct) {
      this.cart.push({ _id, size, amount: 1 });
    }

    setLocalStorage("cart", this.cart);
  }

  get itemsInCart(): number {
    return (
      this.cart.reduce((acc, cartItem) => {
        const sum = acc + cartItem.amount;
        return sum;
      }, 0) || 0
    );
  }
}

export default CartStore;
