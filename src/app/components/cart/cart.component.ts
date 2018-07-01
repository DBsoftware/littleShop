import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ICartItem } from '../../models/interfaces/cartItem';
import { CartService } from '../../providers/cart.service';
import { element } from 'protractor';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [`
  .contenedor{
    overflow: hidden;
  }
  .scrollDiv{
    overflow-y:scroll;
    height:270px;
    /*background:gray;*/
    padding: 5px;
  }
  `]
})
export class CartComponent implements OnInit {
  items: ICartItem[] = [];
  selectedItem = 0;
  total = 0;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.close.emit(true);
  }

  constructor(public carritoSrv: CartService) {
    this.items = this.carritoSrv.obtenerAlmacenamientoLocal()
    this.selectedItem = this.items.length;
    this.items.forEach(e => {
      this.total += e.precio;
    });
  }

  ngOnInit() {

  }


  removeItem(item: ICartItem, index: number) {
    this.total -= item.precio;
    this.selectedItem = index;
    this.carritoSrv.carritoLenght.emit(this.items.length-1);
    setTimeout(() => {
      this.selectedItem = this.items.length;
      this.items = this.items.filter(i => i.nombre !== item.nombre);
      this.carritoSrv.modificarAlmacenamientoLocal(this.items);
    }, 1000);
  }

}
