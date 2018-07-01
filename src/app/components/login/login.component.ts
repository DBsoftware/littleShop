import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  input {
    border: 1px dashed rgba(181,181,181,0.57);
    font: normal 16px/normal "Times New Roman", Times, serif;
    color: rgba(0,142,198,1);
    text-align: center;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
    -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
    -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
    -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
    transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  }
  `]
})
export class LoginComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.close.emit(true);
  }
  constructor(public loginSrv: LoginService) { }

  ngOnInit() {
  }

  submit(object) {
    console.log(object.value);
    this.loginSrv.almacenarLocalmente();
    this.loginSrv.notification.emit(true);
  }

}
