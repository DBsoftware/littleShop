import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styles: []
})
export class WishListComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.close.emit(true);
  }
  constructor() { }

  ngOnInit() {
  }

}
