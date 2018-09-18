import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { OrderDetailsService } from '../../services/order-details.service';
import { UploadProductService } from '../../services/upload-product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrderDetails } from '../../models/order-details';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  ordersDetail: Array<OrderDetails>;
  product: Product;

  constructor(private authService: AuthService,
              private router: Router,
              private orderDetails: OrderDetailsService,
              private uploadProduct: UploadProductService) {

              this.product = new Product();

  }

  ngOnInit() {
    this.loadAllOrderDetaislForAdmin();
  }

  loadAllOrderDetaislForAdmin() {
    this.orderDetails.loadAllOrderDetails()
      .subscribe((result) => {
        console.log(result);
        this.ordersDetail = result;
      });
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }

  readFile(uploadFile: any) {
    this.product.fileObj = uploadFile.target.files[0];
  }

  productAdd(adminAddProduct: NgForm) {
    if(adminAddProduct.valid) {
      alert("Form Valid");
      this.uploadProduct.pushProduct(this.product);
    } else {
      alert("Form not valid");
    }
  }
}
