import { makeAutoObservable } from "mobx";
import { ProductI } from "../types";

class ProductStore {
  productInView: ProductI | null = null;

  similarProducts: Array<ProductI> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentProduct(product: ProductI | null): void {
    this.productInView = product;
  }

  setSimilarProducts(products: Array<ProductI>): void {
    this.similarProducts = products;
  }
}

export default ProductStore;
