import { Injectable, EventEmitter } from '@angular/core';
import { iItem } from '../models/models.index';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public page = new EventEmitter<number>();
  public termino = new EventEmitter<string>();
  producto: iItem;
  constructor( public http: HttpClient,
              public router: Router) {}

  cargar(desde: number = 0 ) {
    return this.http.get(`${environment.URL_SERVICIOS}/producto?desde=${desde}&limite=4`);
  }

  buscar(t: string, desde: number = 0) {
    return this.http.get(`${environment.URL_SERVICIOS}/busqueda/coleccion/productos/${t}?desde=${desde}&limite=4`)
                    .pipe(map((r: any) => r.aux));
  }
  obtener(t: string) {
    return this.http.get(`${environment.URL_SERVICIOS}/producto/${t}`).pipe(map((r: any) => r.aux));
  }
}
