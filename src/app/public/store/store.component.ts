import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products: Array<Product>;

  constructor(private storeService: StoreService, private cartService: CartService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.storeService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  addToCart(productId, productName, unitPrice, quantity) {
    this.cartService.addToCart(productId, productName, unitPrice, quantity);
  }

}
