import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Commponent/add-product/add-product.component';
import { MainLayoutComponent } from './Commponent/main-layout/main-layout.component';
import { NotFoundComponent } from './Commponent/not-found/not-found.component';
import { OrderMasterComponent } from './Commponent/order-master/order-master.component';
import { ProductDetailsComponent } from './Commponent/product-details/product-details.component';
import { HomeComponent } from './Commponent/products/home.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'products', component: HomeComponent },
      { path: 'products/:pid', component: ProductDetailsComponent },
      { path: 'home', component: OrderMasterComponent },
      { path: 'addproduct', component: AddProductComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
