import { Component, OnInit, Input } from '@angular/core';
import { CatalogoService } from '../../providers/services.index';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styles: []
})
export class PaginacionComponent implements OnInit {
  paginaActual = 0;
  paginas: number[] = [];
  cantidadPagina = 4;
  @Input() total: number;
  constructor(public catalogoService: CatalogoService) {

  }

  ngOnInit() {
    this.createPagination((this.total / this.cantidadPagina));
  }

  cambioPagina(n: number) {
    if (n < 0 || n > (this.paginas.length - 1)) {
      return;
    }
    this.catalogoService.page.emit(n);
    this.paginaActual = n;
  }

  createPagination(size: number) {
    for (let index = 0; index < size; index++) {
      this.paginas.push(index);
    }
    return this.paginas;
  }

}
