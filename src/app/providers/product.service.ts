import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public page = new EventEmitter<number>();

  constructor() { }
}
