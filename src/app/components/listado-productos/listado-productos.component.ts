import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styles: []
})
export class ListadoProductosComponent implements OnInit {
  @Input() productos;
  constructor() { }

  ngOnInit() {
  }

}
