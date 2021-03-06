import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public notification = new EventEmitter<boolean>();
  constructor() { }
  almacenarLocalmente() {
    localStorage.setItem('login', 'true');
  }

  isLogIn() {
    return (localStorage.getItem('login') && localStorage.getItem('login') === 'true' );
  }
}

