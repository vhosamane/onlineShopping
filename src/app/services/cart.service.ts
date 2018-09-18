import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart;
  constructor() {
    this.cart = new Cart();
    //this.loadCart();
  }

  addToCart(productId, name, unitPrice, quantity){
    //console.log(productId + productName + productPrice + quantity);
    if(quantity !== undefined) {
      let found = false;
      for(let i = 0; i < this.cart.items.length && !found; i++) {
        const item: CartItem = this.cart.items[i];
        if(item.productId === productId) {
          found = true;
          item.quantity = item.quantity + quantity;
        }
      }
      if(!found) {
        const item = new CartItem(productId, name, unitPrice, quantity);
        this.cart.items.push(item);
      }
      this.calculateCart();
      this.saveCart();
    }
  }

  deleteFromCart(productId) {
    for(let i = 0; i < this.cart.items.length; i++) {
      const item = this.cart.items[i];
      if(item.productId = productId) {
        this.cart.items.splice(i, 1);
      }
    }
    this.calculateCart();
    this.saveCart();
  }

  calculateCart() {
    let count = 0;
    let price = 0;
    let discount = 0;
    for(let i = 0; i < this.cart.items.length; i++) {
      const item = this.cart.items[i];
      count = count + item.quantity;
      price += this.cart.items[i].total = item.quantity * item.unitPrice;
    }
    if(price > 1000) {
      discount = price - 100;
    }
    this.cart.totalItems = count;
    this.cart.total = price;
  }

  saveCart() {
    if(localStorage != null && JSON != null) {
      localStorage[this.cart.cartName] = JSON.stringify(this.cart.items);
    }
  }

  clearCart() {
    this.cart.items = [];
    this.cart.total = 0;
    if(localStorage != null && JSON != null) {
      localStorage[this.cart.cartName] = '';
    }
    this.cart.totalItems = 0;
  }

}
