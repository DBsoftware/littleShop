import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EllipsisPipe } from './ellipsis.pipe';
import { ImagenPipe } from './imagen.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EllipsisPipe, ImagenPipe],
  exports:  [EllipsisPipe, ImagenPipe]
})
export class PipesModule { }
