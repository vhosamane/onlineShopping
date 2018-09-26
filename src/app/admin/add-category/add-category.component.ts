import { Component, OnInit } from '@angular/core';
import { UploadProductService } from '../../services/upload-product.service';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/categories';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category;

  constructor(private uploadProduct: UploadProductService) {
    this.category = new Category();
  }

  ngOnInit() {
  }

  categoryAdd(adminAddCategory: NgForm) {
    if(adminAddCategory.valid) {
      alert("Category form Valid");
      this.uploadProduct.pushCategory(this.category);
    } else {
      alert("Category form not valid");
    }
  }

}
