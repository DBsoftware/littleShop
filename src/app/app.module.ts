import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './providers/services.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    PagesModule,
    ComponentsModule,
    AppRoutingModule,
    SharedModule,
    ServicesModule,
    ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
