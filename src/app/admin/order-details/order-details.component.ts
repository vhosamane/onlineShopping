import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
import { OrderDetails } from '../../models/order-details';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  ordersDetail: Array<OrderDetails>;

  constructor(private orderDetails: OrderDetailsService) { }

  ngOnInit() {
    this.loadAllOrderDetaislForAdmin();
  }

  loadAllOrderDetaislForAdmin() {
    this.orderDetails.loadAllOrderDetails()
      .subscribe((result) => {
        this.ordersDetail = result;
        //this.rowData = result;
      });
  }
}
