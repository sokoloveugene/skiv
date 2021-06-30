import { makeAutoObservable } from "mobx";
import { ProductI, ProductReducedI } from "types";

class ProductStore {
  productInView: ProductI | null = null;

  similarProducts: Array<ProductReducedI> = [];

  categoryProducts: Array<ProductI> = [];

  searchResults: Array<ProductI> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentProduct(product: ProductI | null): void {
    this.productInView = product;
  }

  setSimilarProducts(products: Array<ProductReducedI>): void {
    this.similarProducts = products;
  }

  setCategoryProducts(products: Array<ProductI>): void {
    this.categoryProducts = products;
  }

  setSearchResults(products: Array<ProductI>): void {
    this.searchResults = products;
  }
}

export default ProductStore;
