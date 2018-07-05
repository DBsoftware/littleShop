import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iBlog } from '../models/models.index';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public page = new EventEmitter<number>();
  public total = new EventEmitter<number>();
  blog: iBlog;
  constructor( public http: HttpClient,
              public router: Router) {
  }

  cargar(desde: number = 0 ) {
    return this.http.get(`${environment.URL_SERVICIOS}/blog?desde=${desde}&limite=4`);
  }

  buscar(t: string, desde: number = 0) {
    return this.http.get(`${environment.URL_SERVICIOS}/busqueda/coleccion/blogs/${t}?desde=${desde}&limite=4`)
                    .pipe(map((r: any) => r.aux));
  }
  obtener(t: string) {
    return this.http.get(`${environment.URL_SERVICIOS}/blog/${t}`).pipe(map((r: any) => r.aux));
  }
}
