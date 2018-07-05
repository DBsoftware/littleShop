import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginService,
  CartService,
  CatalogoService,
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
    CatalogoService,
    WishListService
  ]
})
export class ServicesModule { }
