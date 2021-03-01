import { makeAutoObservable } from "mobx";
import { ProductI } from "types";

class ProductStore {
  productInView: ProductI | null = null;

  similarProducts: Array<ProductI> = [];

  categoryProducts: Array<ProductI> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentProduct(product: ProductI | null): void {
    this.productInView = product;
  }

  setSimilarProducts(products: Array<ProductI>): void {
    this.similarProducts = products;
  }

  setCategoryProducts(products: Array<ProductI>): void {
    this.categoryProducts = products;
  }
}

export default ProductStore;
