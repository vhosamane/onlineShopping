import { Component, OnInit } from '@angular/core';
import { UploadProductService } from '../../services/upload-product.service';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product';
import { Category } from '../../models/categories';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  categoryDetails: Array<Category>
  constructor(private uploadProduct: UploadProductService) {
    this.product = new Product();
  }

  ngOnInit() {
    this.loadAllCatagoriesForAdmin();
  }

  readFile(uploadFile: any) {
    this.product.fileObj = uploadFile.target.files[0];
  }

  loadAllCatagoriesForAdmin() {
    this.uploadProduct.loadAllCatagories()
      .subscribe((result) => {
      this.categoryDetails = result;
    });
  }

  productAdd(adminAddProduct: NgForm) {
    if(adminAddProduct.valid) {
      this.uploadProduct.pushProduct(this.product);
    } else {
      alert("Form not not valid");
    }
  }

}
