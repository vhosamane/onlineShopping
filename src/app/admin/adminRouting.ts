import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { StoreListComponent } from './store-list/store-list.component';

export const adminRouting: Routes = [
  { path: '', component: AdminDashboardComponent, children : [
    { path: "order-details", component: OrderDetailsComponent, pathMatch: 'full' },
    { path: "add-product", component: AddProductComponent, pathMatch: 'full' },
    { path: "add-category", component: AddCategoryComponent, pathMatch: 'full' },
    { path: "store-list", component: StoreListComponent, pathMatch: 'full' },
    { path: "", redirectTo: "order-details", component: OrderDetailsComponent, pathMatch: 'full' }
  ]}
];
