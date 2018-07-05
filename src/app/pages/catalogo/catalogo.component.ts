import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { iItem, iBlog } from '../../models/models.index';
import { CatalogoService } from '../../providers/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styles: []
})
export class CatalogoComponent implements OnInit {

  carrefour = false;
  productos: iItem[] = [];
  blogs: iBlog[] = [];
  total: number;
  termino = '';
  constructor(public router: Router,
              public catalogoService: CatalogoService) {
      this.getDataRoute()
      .subscribe(d => {
        this.carrefour = (d.page === 'blog');
        this.catalogoService.carrefour = this.carrefour;
        this.cargar();
      });
  }

  ngOnInit() {
  this.catalogoService.page.subscribe(r => {
    this.termino === '' ?
    this.cargar(r * 4) :
    this.buscar(r * 4);
  });

  this.catalogoService.termino.subscribe(termino => {
    this.termino = termino;
    this.buscar();
  });

  }

  getDataRoute(): Observable<any> {
    return this.router.events
    .pipe(
      filter(e => e instanceof ActivationEnd),
      filter((e: ActivationEnd) => e.snapshot.firstChild === null),
      map(r => r.snapshot.data)
    );
  }

  cargar(n?) {
        // this.cargando = true;
        this.catalogoService.cargar(n)
        .subscribe((resp: any) => {
          this.end(resp);
          // this.cargando = false;
        });
  }

  buscar(desde: number = 0) {
    // this.cargando = true;
    if (this.termino === '' ) {
      this.cargar();
      return;
    }
    this.catalogoService.buscar(this.termino, desde).subscribe((resp: any) => {
      this.end(resp);
      // this.cargando = false;
    });
  }

  end(r: any) {
    this.total = r.total;
    this.carrefour ?
    this.blogs = r.aux :
    this.productos = r.aux;
  }

}
