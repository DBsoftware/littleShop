import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginService,
  CartService,
  BlogService,
  ProductService,
  WishListService } from './services.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    LoginService,
    CartService,
    BlogService,
    ProductService,
    WishListService
  ]
})
export class ServicesModule { }
