import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';


import { WishListComponent,
        ModalComponent,
        RegisterComponent,
        PaginacionComponent,
        UnidadComponent,
        LoginComponent,
        BlankComponent,
        FiltrosComponent,
        TitleComponent,
        ListadoProductosComponent,
        ListadoBlogComponent,
        ContactComponent,
        CartComponent } from './components.index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
    ],
  declarations: [
    ModalComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    WishListComponent,
    UnidadComponent,
    PaginacionComponent,
    BlankComponent,
    FiltrosComponent,
    TitleComponent,
    ListadoProductosComponent,
    ListadoBlogComponent,
    ContactComponent
  ],
  exports: [
    ModalComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    WishListComponent,
    UnidadComponent,
    PaginacionComponent,
    BlankComponent,
    FiltrosComponent,
    TitleComponent,
    ListadoProductosComponent,
    ListadoBlogComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
