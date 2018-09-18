import { CartItem } from './cart-item';

export class Cart {
  items: CartItem[];
  total: number;
  totalItems: number;
  userId;
  createdDate;
  cartName: string;
  constructor() {
    this.cartName = "myCart";
    this.items = [];
  }
}
