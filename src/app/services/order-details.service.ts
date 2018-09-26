import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { OrderDetails } from '../models/order-details';
import { Category } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private _http: HttpClient) { }

  loadAllOrderDetails() {
    return this._http.get(environment.apiUrl + '/carts.json')
      .pipe(map((res: any) => {
        const data = res;
        const orderDetails: OrderDetails[] = [];
        for(let key in data) {
          let orderDetail: OrderDetails = data[key];
          orderDetails.push(orderDetail);
        }
        return orderDetails;
      }));
  }
}
