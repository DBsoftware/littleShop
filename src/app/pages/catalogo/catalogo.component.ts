import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { iItem, iBlog } from '../../models/models.index';
import { BlogService, ProductService } from '../../providers/services.index';

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
  constructor(public router: Router,
              public blogSrv: BlogService,
              public productSrv: ProductService) {
    this.getDataRoute()
    .subscribe(d => {
      this.carrefour = (d.page === 'blog');
    });
    this.seudoServicio();
    this.productos = this.productos.slice(0, 4);
    this.blogs = this.blogs.slice(0, 4);
  }

  ngOnInit() {
  this.blogSrv.page.subscribe(r => {
    this.seudoServicio();
    this.blogs = this.blogs.slice(r * 4, (r * 4) + 4);
  });
  this.productSrv.page.subscribe(r => {
    this.seudoServicio();
    this.productos = this.productos.slice(r * 4, (r * 4) + 4);
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

  seudoServicio() {
    this.productos = [];
    this.blogs = [];

    for (let index = 0; index < 21; index++) {
      this.productos.push({
        nombre: `Nombre de Producto ${index}`,
        precio: 1300 * index === 0 ? 1300 : 1300 * index
      });
      this.blogs.push({
        titulo: `Blog ${index}`,
        contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Unde porro hic aperiam,
        maiores, perferendis laboriosam blanditiis
        officia quidem autem nesciunt atque reprehenderit
        cum! Facilis magni culpa rem sequi, nihi
        maiores, perferendis laboriosam blanditiis
        officia quidem autem nesciunt atque reprehenderit
        cum! Facilis magni culpa rem sequi, nihi
        maiores, perferendis laboriosam blanditiis
        officia quidem autem nesciunt atque reprehenderit
        cum! Facilis magni culpa rem sequi, nihi
        l praesentium!Animi`
      });
    }
    this.total = this.blogs.length;
  }
}
