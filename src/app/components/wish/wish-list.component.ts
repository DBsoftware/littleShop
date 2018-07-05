import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishListService, CartService } from '../../providers/services.index';
import { iItem } from '../../models/models.index';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styles: []
})
export class WishListComponent implements OnInit {
  items: iItem[] = [];
  selectedItem = 0;
  total = 0;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.close.emit(true);
  }

  constructor(public wishSrv: WishListService, public cartService: CartService) {
    this.items = this.wishSrv.obtenerAlmacenamientoLocal();
    this.selectedItem = this.items.length;
    this.items.forEach(e => {
      this.total += e.precio;
    });
  }

  ngOnInit() {

  }


  removeItem(item: iItem, index: number) {
    this.total -= item.precio;
    this.selectedItem = index;
    this.wishSrv.wishLenght.emit(this.items.length - 1);
    setTimeout(() => {
      this.selectedItem = this.items.length;
      this.items = this.items.filter(i => i.nombre !== item.nombre);
      this.wishSrv.modificarAlmacenamientoLocal(this.items);
    }, 1000);
  }

  addToCart(p: iItem, index: number) {
    this.cartService.carritoItem.emit(p);
    this.removeItem(p, index);
    this.closeModal();
  }

}
