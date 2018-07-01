import { Component, OnInit,Input } from '@angular/core';
import { ICartItem } from '../../models/interfaces/cartItem';
import { CartService } from '../../providers/cart.service';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styles: []
})
export class UnidadComponent implements OnInit {
  @Input() carrefour: boolean;
  @Input() producto: ICartItem;
  @Input() blog: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(p: ICartItem) {
    this.cartService.carritoItem.emit(p);
  }

}
