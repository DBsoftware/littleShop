import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styles: []
})
export class ListadoProductosComponent implements OnInit {
  @Input() productos;
  thisWay = true;
  @Input() total: number;
  fadeOut: boolean;
  constructor() { }

  ngOnInit() {
    // this.fadeOut = false;
  }

  salida(e: any) {
    this.fadeOut = e;
  }

}
