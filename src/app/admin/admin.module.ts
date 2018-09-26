import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminRouting } from './adminRouting';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { StoreListComponent } from './store-list/store-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRouting),
    SharedModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  declarations: [AdminDashboardComponent, AdminMenuComponent, AddProductComponent, AddCategoryComponent, OrderDetailsComponent, StoreListComponent]
})
export class AdminModule { }
