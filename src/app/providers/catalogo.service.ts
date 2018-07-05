import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  public page = new EventEmitter<number>();
  public termino = new EventEmitter<string>();
  carrefour: boolean;
  tipo: string;
  constructor( public http: HttpClient,
              public router: Router) {
  }

  cargar(desde: number = 0 ) {
    this.tipo = this.carrefour ? 'blog' : 'producto';
    return this.http.get(`${environment.URL_SERVICIOS}/${this.tipo}?desde=${desde}&limite=4`);
  }

  buscar(t: string, desde: number = 0) {
    this.tipo = this.carrefour ? 'blogs' : 'productos';
    return this.http.get(`${environment.URL_SERVICIOS}/busqueda/coleccion/${this.tipo}/${t}?desde=${desde}&limite=4`);
  }
  obtener(t: string) {
    this.tipo = this.carrefour ? 'blog' : 'producto';
    return this.http.get(`${environment.URL_SERVICIOS}/${this.tipo}/${t}`).pipe(map((r: any) => r.aux));
  }
}


