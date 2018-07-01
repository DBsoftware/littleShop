import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../providers/services.module';
import { ComponentsModule } from '../components/components.module';
import { FeatureRoutingModule } from './pages.routes';



import {MainComponent,
        CatalogoComponent,
        PageNotFoundComponent,
        AboutComponent } from './pages.index';
import { ModalComponent } from '../components/components.index';


@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    ComponentsModule,
    SharedModule,
    FeatureRoutingModule
  ],
  declarations: [
    MainComponent,
    AboutComponent,
    CatalogoComponent,
    PageNotFoundComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class PagesModule { }
