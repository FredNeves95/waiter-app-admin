export type OrderStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

interface Ingredient {
  name: string;
  icon: string;
  _id: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredient[];
  category: string;
  __v: number;
}

interface OrderedProduct {
  product: Product;
  quantity: number;
  _id: string;
}

export interface Order {
  _id: string;
  table: string;
  status: string;
  products: OrderedProduct[];
  createdAt: string;
  __v: number;
}

export type CurrentOrder = {
  status: OrderStatus;
  order: Order;
}

