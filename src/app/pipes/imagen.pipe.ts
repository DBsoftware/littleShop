import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    return ( !img ) ? `${environment.URL_SERVICIOS}/img/usu/1234` :
    (img.indexOf('https') >= 0 ? img  : `${environment.URL_SERVICIOS}/img${this.type(tipo)}${img}`  );
  }

  type(key: string) {
    switch (key) {
      case 'usuario':
        return '/usuarios/';
      case 'productos':
        return '/productos/';
      case 'blogs':
        return '/blogs/';
      default :
        return '';
    }
  }
}
