export interface SizeOptionI {
  _id: string;
  title: string;
  available: number;
  ordered?: number;
}

interface AdditionalI {
  title: string;
  data: Array<string>;
}

// TODO category enum
export interface ProductI {
  _id: string;
  images: Array<string>;
  tag: string | null;
  name: string;
  price: number;
  price_old: number | null;
  sizes: Array<SizeOptionI>;
  description: string;
  category: string;
  additional: Array<AdditionalI>;
}

export interface ProductWithSimilarI {
  product: ProductI;
  similarProducts: Array<ProductI>;
}

export interface CartItemI {
  _id: string;
  sizes: {
    [key: string]: number;
  };
}

export interface CartNotificationI {
  name: string;
  sizeTitle: string;
  price: number;
  image: string;
}

export interface OptionI {
  label: string;
  value: string;
}
