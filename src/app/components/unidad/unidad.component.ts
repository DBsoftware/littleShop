import { Component, OnInit, Input } from '@angular/core';
import { iItem } from '../../models/models.index';
import { WishListService, CartService, LoginService } from '../../providers/services.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styles: [
    `
    .text-blog {
      overflow: hidden;

    }
    `
  ]
})
export class UnidadComponent implements OnInit {
  @Input() carrefour: boolean;
  @Input() producto: iItem;
  @Input() blog: any;
  login = false;
  flip = 'd-none';
  loading = true;
  constructor(private loginSrv: LoginService,
              private cartService: CartService,
              private wishService: WishListService){
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnInit() {
    this.login = this.loginSrv.isLogIn();
    this.loginSrv.notification.subscribe(r => {
      this.login = r;
    });
  }

  addToCart(p: iItem) {
    this.login ?
    this.cartService.carritoItem.emit(p) :
    swal('Debes estar autenticado', 'Para usar esta caracteristica debes estar autenticado', 'error');
  }
  addToWish(p: iItem) {
    this.login ?
    this.wishService.wishItem.emit(p) :
    swal('Debes estar autenticado', 'Para usar esta caracteristica debes estar autenticado', 'error');
  }

  in() {
    this.flip = 'fadeIn d-block';
  }

  out() {
    this.flip = 'fadeOut d-block';
    setTimeout(() => {
      this.flip = 'd-none';
    }, 100);
  }

}
