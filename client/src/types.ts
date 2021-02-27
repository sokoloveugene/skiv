export interface SizeOptionI {
  _id: number;
  title: string;
  available: number;
}

interface AdditionalI {
  title: string;
  data: Array<string>;
}

// TODO category enum
export interface ProductI {
  _id: string;
  image: Array<string>;
  tag: string | null;
  name: string;
  price: number;
  price_old: number | null;
  sizes: Array<SizeOptionI>;
  description: string;
  category: string;
  additional: Array<AdditionalI>;
}