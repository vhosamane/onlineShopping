export class CartItem {
  CartItemId;
  total;
  constructor(public productId: string, public name: string, public unitPrice: number, public quantity: number) {

  }
}
