import { Injectable, EventEmitter } from '@angular/core';
import { iItem } from '../models/models.index';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  public wishItem = new EventEmitter<iItem>();
  public wishLenght = new EventEmitter<number>();

  constructor() {}

  almacenarLocalmente(arreglo: iItem[]) {
    localStorage.setItem('wish', JSON.stringify({wish: arreglo}));
  }
  obtenerAlmacenamientoLocal() {
    return localStorage.getItem('wish') ?
    JSON.parse(localStorage.getItem('wish')).wish : [] ;
  }
  modificarAlmacenamientoLocal(arreglo: iItem[]) {
    localStorage.removeItem('wish');
    localStorage.setItem('wish', JSON.stringify({wish: arreglo}));

  }
}
