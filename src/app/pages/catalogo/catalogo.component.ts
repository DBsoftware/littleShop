import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styles: []
})
export class CatalogoComponent implements OnInit {
  carrefour = false;
  productos = [
    {
      nombre: 'Nombre de Producto1',
      precio: 1300
    }, {
      nombre: 'Nombre de Producto2',
      precio: 1400
    }, {
      nombre: 'Nombre de Producto3',
      precio: 1500
    }
  ];
  blogs = [
    {
      titulo: 'Nombre de blog',
      contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Unde porro hic aperiam,
      maiores, perferendis laboriosam blanditiis
      officia quidem autem nesciunt atque reprehenderit
      cum! Facilis magni culpa rem sequi, nihi
      l praesentium!Animi`
    }, {
      titulo: 'Nombre de blog',
      contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Unde porro hic aperiam,
      maiores, perferendis laboriosam blanditiis
      officia quidem autem nesciunt atque reprehenderit
      cum! Facilis magni culpa rem sequi, nihi
      l praesentium!Animi`
    }, {
      titulo: 'Nombre de blog',
      contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Unde porro hic aperiam,
      maiores, perferendis laboriosam blanditiis
      officia quidem autem nesciunt atque reprehenderit
      cum! Facilis magni culpa rem sequi, nihi
      l praesentium!Animi`
    }
  ];

  constructor(public router: Router) {
    this.getDataRoute()
    .subscribe(d => {
      this.carrefour = (d.page === 'blog');
    });
  }

  ngOnInit() {
  }
  getDataRoute(): Observable<any> {
    return this.router.events
    .pipe(
      filter(e => e instanceof ActivationEnd),
      filter((e: ActivationEnd) => e.snapshot.firstChild === null),
      map(r => r.snapshot.data)
    );
  }
}
