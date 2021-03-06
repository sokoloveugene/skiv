import { makeAutoObservable } from "mobx";
import { getLocalStorage } from "helpers/localStorage";
import {
  ProductI,
  SizeOptionI,
  CartItemI,
  CartNotificationI,
  CheckoutProductI,
  CheckoutSizeI,
} from "types";
import { getProductsByIds } from "api/productsApi";
import ProductStore from "./productStore";

class CartStore {
  productStore: ProductStore;

  // localStorage cart
  cart: CartItemI[];

  similarProducts: Array<ProductI> = [];

  notification: CartNotificationI | null = null;

  // updated cart data
  cartData: ProductI[] = [];

  cartDataLoading = false;

  constructor(productStore: ProductStore) {
    makeAutoObservable(this);
    this.productStore = productStore;
    this.cart = getLocalStorage("cart", []);
  }

  get checkoutProducts(): Array<CheckoutProductI> {
    return this.cartData.map((product) => {
      const id = product._id;
      const orderedSizes = product.sizes.reduce(
        (acc, { _id, title, ordered }) => {
          if (ordered) {
            const mapped = {
              _id,
              title,
              ordered,
            };
            acc.push(mapped);
          }
          return acc;
        },
        [] as Array<CheckoutSizeI>
      );

      return { _id: id, sizes: orderedSizes };
    });
  }

  get productInView(): ProductI | null {
    return this.productStore.productInView;
  }

  addToCart(size?: SizeOptionI | null): void {
    if (!this.productInView?._id || !size || !size.available) return;

    const { _id } = this.productInView;

    const notificationData = {
      name: this.productInView.name,
      sizeTitle: size.title,
      price: this.productInView.price,
      image: this.productInView.images[0],
    };

    const sameProduct = this.cart.find((cartItem) => cartItem._id === _id);

    if (!sameProduct) {
      this.cart.push({ _id, sizes: { [size._id]: 1 } });
      this.setNotification(notificationData);
      return;
    }

    if (!Object.prototype.hasOwnProperty.call(sameProduct.sizes, size._id)) {
      // same product in cart but no same size
      sameProduct.sizes[size._id] = 1;
      this.setNotification(notificationData);
      return;
    }

    if (size.available) {
      // same product, same size, available to add one more
      sameProduct.sizes[size._id] += 1;
      this.setNotification(notificationData);
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
    this.cartDataLoading = true;
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
    this.cartDataLoading = false;
  }

  prepareToOperation(
    productId: string,
    sizeId: string
  ): {
    productInCartData: ProductI | undefined;
    productInSavedCart: CartItemI | undefined;
    targetSize: SizeOptionI | undefined;
  } {
    const defaultReturn = {
      productInCartData: undefined,
      productInSavedCart: undefined,
      targetSize: undefined,
    };

    const productInCartData = this.cartData.find(
      (product) => product._id === productId
    );

    const productInSavedCart = this.cart.find(
      (cartItem) => cartItem._id === productId
    );

    if (!productInCartData || !productInSavedCart) return defaultReturn;

    const targetSize = productInCartData.sizes.find(
      (size) => size._id === sizeId
    );

    if (!targetSize) return defaultReturn;

    return {
      productInCartData,
      productInSavedCart,
      targetSize,
    };
  }

  addOne(productId: string, sizeId: string): void {
    if (!productId || !sizeId) return;

    const {
      productInCartData,
      productInSavedCart,
      targetSize,
    } = this.prepareToOperation(productId, sizeId);

    if (
      !productInCartData ||
      !productInSavedCart ||
      !targetSize ||
      !targetSize.ordered
    )
      return;

    if (targetSize.available > targetSize.ordered) {
      targetSize.ordered += 1;
      productInSavedCart.sizes[sizeId] += 1;
    }
  }

  removeOne(productId: string, sizeId: string): void {
    if (!productId || !sizeId) return;

    const {
      productInCartData,
      productInSavedCart,
      targetSize,
    } = this.prepareToOperation(productId, sizeId);

    if (
      !productInCartData ||
      !productInSavedCart ||
      !targetSize ||
      !targetSize.ordered
    )
      return;

    if (targetSize.ordered > 1) {
      targetSize.ordered -= 1;
      productInSavedCart.sizes[sizeId] -= 1;
    }
  }

  removeAll(productId: string, sizeId: string): void {
    if (!productId || !sizeId) return;

    const {
      productInCartData,
      productInSavedCart,
      targetSize,
    } = this.prepareToOperation(productId, sizeId);

    if (
      !productInCartData ||
      !productInSavedCart ||
      !targetSize ||
      !targetSize.ordered
    )
      return;

    targetSize.ordered = 0;
    delete productInSavedCart.sizes[sizeId];
    const shouldDeleteProductId = !Object.keys(productInSavedCart.sizes).length;
    if (shouldDeleteProductId) {
      this.cart = this.cart.filter(
        (cartItem) => cartItem._id !== productInSavedCart._id
      );
    }

    // if no items in cart show placeholder
    if (!this.cart.length) {
      this.cartData = [];
    }
  }

  get totalCost(): number {
    return this.cartData.reduce((total, item) => {
      const { sizes, price } = item;
      const totalBySize = sizes.reduce((acc, size) => {
        if (!size.ordered) return acc;
        const updatedTotalBySize = acc + size.ordered * price;
        return updatedTotalBySize;
      }, 0);
      const updatedTotal = total + totalBySize;
      return updatedTotal;
    }, 0);
  }

  setNotification(data: CartNotificationI | null): void {
    this.notification = data;
  }
}

export default CartStore;
