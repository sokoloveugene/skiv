export interface SizeOptionI {
  _id: string;
  title: string;
  available: number;
  ordered?: number;
}

export interface AdditionalI {
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
  sizes: Array<SizeOptionI>;
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

export interface AuthResponseI {
  isAuthenticated: boolean;
}

export interface LoginCredentialsI {
  email: string;
  password: string;
}

export type Categories =
  | "jackets"
  | "costumes"
  | "jeans"
  | "skirts"
  | "pants"
  | "shirts"
  | "dress";

export interface OrderI {
  address: string;
  callMeBack: boolean;
  delivery: "address delivery" | "nova poshta";
  email: string;
  firstName: string;
  lastName: string;
  mailing: boolean;
  payment: "card" | "payment on delivery";
  phoneNumber: string;
  status?: string;
  products: Array<CheckoutProductI>;
}

export interface CheckoutSizeI {
  _id: string;
  title: string;
  ordered: number;
}

export interface CheckoutProductI {
  _id: string;
  sizes: Array<CheckoutSizeI>;
}
