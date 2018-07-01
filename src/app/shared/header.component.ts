import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/login.service';
import { opt } from '../dataSitio/opcionesModal';
import { iItem } from '../models/models.index';
import { WishListService, CartService } from '../providers/services.index';
import swal from 'sweetalert';


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
  cantidadwish = 0;
  items: iItem[] = [];
  itemsWish: iItem[] = [];

  constructor(public loginSrv: LoginService,
              public carritoSrv: CartService,
              public wishSrv: WishListService
            ) {
    this.login = this.loginSrv.isLogIn();
    // carrito section ================================== >>>>>>>>>>>>>
    this.items = this.carritoSrv.obtenerAlmacenamientoLocal();
    this.cantidadCarrito = this.items.length;
    // WishList section  ================================== >>>>>>>>>>>>>
    this.itemsWish = this.wishSrv.obtenerAlmacenamientoLocal();
    this.cantidadwish = this.itemsWish.length;
  }

  ngOnInit() {
    this.loginSrv.notification.subscribe(r => {
      this.login = r;
      this.closeModal();
    });
    // carrito section ================================== >>>>>>>>>>>>>
    this.carritoSrv.carritoLenght.subscribe(r => {
      this.cantidadCarrito = r ? r : 0;
    });
    this.carritoSrv.carritoItem.subscribe(r => {
      this.items = this.carritoSrv.obtenerAlmacenamientoLocal();
      this.items.findIndex( e =>  e.nombre === r.nombre) === -1 ?
      this.addElement(r, false) : swal('Procedimiento innecesario', 'El elemento ya está en tu carrito', 'error');
      this.carritoSrv.modificarAlmacenamientoLocal(this.items);
      this.cantidadCarrito = this.items.length;
    });
  // WishList section  ================================== >>>>>>>>>>>>>
    this.wishSrv.wishLenght.subscribe(r => {
      this.cantidadwish = r ? r : 0;
    });
    this.wishSrv.wishItem.subscribe(r => {
      this.itemsWish = this.wishSrv.obtenerAlmacenamientoLocal();
      this.itemsWish.findIndex( e =>  e.nombre === r.nombre) === -1 ?
      this.addElement(r, true) : swal('Procedimiento innecesario', 'El elemento ya está en tu lista', 'error');
      this.wishSrv.modificarAlmacenamientoLocal(this.itemsWish);
      this.cantidadwish = this.itemsWish.length;
    });

  }
  openModal(option: number) {
    this.modalDisplay = 'd-block';
    this.crosroads = this.options[option];
  }

  addElement(e: iItem, carrefour: boolean){
    carrefour ? this.itemsWish.push(e) : this.items.push(e);
    swal('Procedimiento exitoso', 'El elemento fue agregado exitosamente', 'success');
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
    swal('Has salido de tu cuenta', '', 'success');
  }
} 
