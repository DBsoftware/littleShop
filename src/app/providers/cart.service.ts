import { Injectable, EventEmitter } from '@angular/core';
import { ICartItem } from '../models/interfaces/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public carritoItem = new EventEmitter<ICartItem>();
  public carritoLenght = new EventEmitter<number>();

  constructor() {}

  almacenarLocalmente(arreglo: ICartItem[]) {
    localStorage.setItem('carrito', JSON.stringify({carrito: arreglo}));
  }
  obtenerAlmacenamientoLocal() {
    return localStorage.getItem('carrito') ?
    JSON.parse(localStorage.getItem('carrito')).carrito : [] ;
  }
  modificarAlmacenamientoLocal(arreglo: ICartItem[]) {
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito', JSON.stringify({carrito: arreglo}));

  }


}
