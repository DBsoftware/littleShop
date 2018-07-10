import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../providers/services.module';
import { ComponentsModule } from '../components/components.module';
import { FeatureRoutingModule } from './pages.routes';
import { PipesModule } from '../pipes/pipes.module';



import {MainComponent,
        CatalogoComponent,
        CoverComponent,
        BlogComponent,
        PageNotFoundComponent,
        AboutComponent } from './pages.index';
import { ModalComponent } from '../components/components.index';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ServicesModule,
    ComponentsModule,
    PipesModule,
    SharedModule,
    FeatureRoutingModule
  ],
  declarations: [
    MainComponent,
    AboutComponent,
    CatalogoComponent,
    PageNotFoundComponent,
    CoverComponent,
    BlogComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class PagesModule { }
