import { Injectable, EventEmitter } from '@angular/core';
import { iItem } from '../models/models.index';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public carritoItem = new EventEmitter<iItem>();
  public carritoLenght = new EventEmitter<number>();

  constructor() {}

  almacenarLocalmente(arreglo: iItem[]) {
    localStorage.setItem('carrito', JSON.stringify({carrito: arreglo}));
  }
  obtenerAlmacenamientoLocal() {
    return localStorage.getItem('carrito') ?
    JSON.parse(localStorage.getItem('carrito')).carrito : [] ;
  }
  modificarAlmacenamientoLocal(arreglo: iItem[]) {
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito', JSON.stringify({carrito: arreglo}));

  }


}
