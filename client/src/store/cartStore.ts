import { makeAutoObservable } from "mobx";
import { getLocalStorage } from "../helpers/localStorage";
import { ProductI, SizeOptionI } from "../types";
import { getProductsByIds } from "../api/productsApi";

interface CartItemI {
  _id: string;
  sizes: {
    [key: string]: number;
  };
}

class CartStore {
  cart: CartItemI[];

  productInView: ProductI | null = null;

  cartData: ProductI[] = [];

  constructor() {
    makeAutoObservable(this);
    this.cart = getLocalStorage("cart", []);
  }

  setCurrentProduct(product: ProductI | null): void {
    this.productInView = product;
  }

  addToCart(size?: SizeOptionI | null): void {
    if (!this.productInView?._id || !size || !size.available) return;

    const { _id } = this.productInView;

    const sameProduct = this.cart.find((cartItem) => cartItem._id === _id);

    if (!sameProduct) {
      this.cart.push({ _id, sizes: { [size._id]: 1 } });
      return;
    }

    if (!Object.prototype.hasOwnProperty.call(sameProduct.sizes, size._id)) {
      // same product in cart but no same size
      sameProduct.sizes[size._id] = 1;
      return;
    }

    if (size.available) {
      // same product, same size, available to add one more
      sameProduct.sizes[size._id] += 1;
    }
  }

  get itemsInCart(): number {
    return (
      this.cart.reduce((acc, cartItem) => {
        const nums = Object.values(cartItem.sizes);
        return acc + nums.reduce((a, n) => a + n, 0);
      }, 0) || 0
    );
  }

  get sizeOptions(): SizeOptionI[] | undefined {
    const sameProduct = this.cart.find(
      (cartItem) => cartItem._id === this.productInView?._id
    );
    if (!sameProduct) return this.productInView?.sizes;

    return this.productInView?.sizes.map((size) => {
      return sameProduct.sizes[size._id]
        ? { ...size, available: size.available - sameProduct.sizes[size._id] }
        : size;
    });
  }

  async fetchCartProducts(): Promise<void> {
    const ids = this.cart.map((cartItem) => cartItem._id);
    const products = await getProductsByIds(ids);

    this.cart.forEach((cartItem) => {
      const { _id: cartItemId, sizes: cartItemSizes } = cartItem;

      const targetProduct = products.find((p) => p._id === cartItemId);

      if (targetProduct) {
        targetProduct.sizes = targetProduct.sizes.map((ts) => ({
          ...ts,
          ordered: cartItemSizes[ts._id] || 0,
        }));
      }
    });

    this.cartData = products;
  }
}

export default CartStore;
