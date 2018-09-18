import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    try {
      return this.http.get(environment.apiUrl + '/products.json')
             .pipe(map((res) => {
               const data = res;
               const products: Product[] = [];
               for(let key in data) {
                 let product: Product = data[key];
                 product.productId = key;
                 products.push(product);
               }
               return products;
             }));
    }
    catch(error) {
      throw error;
    }
  }

  saveCart(cart: Cart) {
    let header = new HttpHeaders({"Content-Type":"application/json"});
    return this.http.post(environment.apiUrl + '/carts.json', JSON.stringify(cart), { headers: header});
  }
}
