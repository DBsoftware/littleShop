import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public page = new EventEmitter<number>();
  public total = new EventEmitter<number>();
  constructor() { }
}
