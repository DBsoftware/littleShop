import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/login.service';
import { opt } from '../dataSitio/opcionesModal';
import { CartService } from '../providers/cart.service';
import { ICartItem } from '../models/interfaces/cartItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  login = false;
  modalDisplay = 'd-none';
  crosroads: string;
  options = opt;
  cantidadCarrito = 0;
  items: ICartItem[] = [];

  constructor(public loginSrv: LoginService,
              public carritoSrv: CartService) {
    this.login = (localStorage.getItem('login') && localStorage.getItem('login') === 'true' );
    this.items = this.carritoSrv.obtenerAlmacenamientoLocal();
    this.cantidadCarrito = this.items.length;
  }

  ngOnInit() {
    this.loginSrv.notification.subscribe(r => {
      this.login = r;
      this.closeModal();
    });
    this.carritoSrv.carritoLenght.subscribe(r => {
      this.cantidadCarrito = r ? r : 0;
    });
    this.carritoSrv.carritoItem.subscribe(r => {
      this.items = this.carritoSrv.obtenerAlmacenamientoLocal();
      this.items.findIndex( e =>  e.nombre === r.nombre) === -1 ?
      this.items.push(r): console.log('el elemento ya está en el carrito');
      this.carritoSrv.modificarAlmacenamientoLocal(this.items);
      this.cantidadCarrito = this.items.length;
    });

  }
  openModal(option: number) {
    this.modalDisplay = 'd-block';
    this.crosroads = this.options[option];
  }

  closeModal() {
    this.modalDisplay = 'fadeOut';

    setTimeout(() => {
      this.modalDisplay = 'd-none';
      this.crosroads = '';
    }, 1000 );
  }

  logOut() {
    this.login = false;
    localStorage.removeItem('login');
  }
}
