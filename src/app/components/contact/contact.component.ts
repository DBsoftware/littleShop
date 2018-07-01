import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.close.emit(true);
  }
  constructor() { }

  ngOnInit() {
  }
  submit(object) {
    console.log(object.value);
  }
}
