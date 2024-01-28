import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PruductDetailComponent } from './pruduct-detail/pruduct-detail.component';
import { PruductListComponent } from './pruduct-listings/pruduct-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/products.service';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path:'',component:PruductListComponent},
      { path:':productId',component:PruductDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    PruductDetailComponent,
    PruductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  //サービスのクラスはプロバイダ
  providers: [
    ProductService
  ],
  bootstrap: []
})
export class ProductModule { }
