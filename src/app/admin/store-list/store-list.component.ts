import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  products: Array<Product>;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.storeService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
