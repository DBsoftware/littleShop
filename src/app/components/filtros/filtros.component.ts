import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogoService } from '../../providers/services.index';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styles: []
})
export class FiltrosComponent implements OnInit {
  @Input() carrefour: boolean;
  @Output() out: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public catalogoService: CatalogoService) { }

  ngOnInit() {
  }

  buscar(t: string) {
    this.out.emit(true);
    setTimeout(() => {
      this.catalogoService.termino.emit(t);
      this.out.emit(false);
    }, 100);
  }

}
